import { createContext, useEffect, useState, useRef } from "react"
import { PropsWithChildren } from "react"
import { BrowserMultiFormatReader } from "@zxing/library"
 interface inputField{
inputBarcode:string
}
interface productDetail{
  id:number,
  name: string,
  barcode:number,
  manufacture: string
}
interface AuthContextType{
toggleMenu:()=>void,
isOpen:boolean,
isScrolled: boolean,
error: string | null,
videoRef:React.RefObject<HTMLVideoElement>, 
barCode: null | string,
data:inputField, 
handleInput:(e:React.ChangeEvent<HTMLInputElement>)=>void,
startScanner:()=>void,
product:null | productDetail,
handleScan:()=> void
}
export const AppContext = createContext<AuthContextType>({
toggleMenu:()=>{},
isOpen:false,
isScrolled:false,
error: null,
videoRef: { current: null },
barCode: null,
data:{inputBarcode:""},
handleInput:()=>{},
startScanner:()=>{},
product:null,
handleScan:()=>{}
})
export const AuthContext = ({children}:PropsWithChildren) => {
      const [isOpen, setIsOpen] = useState(false)
      const [isScrolled, setIsScrolled] = useState(false)
      const videoRef = useRef<HTMLVideoElement | null>(null);
      const [barCode, setBarCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [data, setData]= useState<inputField>({inputBarcode:""})  
  const [productData, setProductData] = useState({Qrcode:"6154000122966"})
  const [product, setProduct] = useState<productDetail | null>(null)
  const handleScan = async()=>{
 
    
    const url = "https://product-scanner-cqro.onrender.com/api/v1/products/scan"
    const input = data.inputBarcode
    const fetchUrl = await fetch(url,{
      method: "POST",
      headers: {
          'content-Type': 'application/json',
               },
      body: JSON.stringify(productData)
  });
    const fetchData = await fetchUrl.json()
    setProduct(fetchData)
    console.log(fetchData);
    
  }
  const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name, value} = e.target
      setData((data)=>({...data, [name]:value}))
  } 
  
    const codeReader = new BrowserMultiFormatReader();
   
    const startScanner = () => {
     
      
      if (!videoRef.current) {
        setError("No video element found.");
        return;
      }

      codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
        if (result) {
          setBarCode(result.getText()); // Set detected barcode
          console.log("Barcode detected:", result.getText());
        }
        if (err && !(err instanceof Error)) {
          setError("Failed to scan barcode.");
          console.error(err);
        }
      })
      .catch((err) => {
        setError("Error starting the scanner");
        console.error(err);
      });
    };

    
    useEffect(() => {
    return () => {
      codeReader.reset(); // Clean up
    };
  }, []);
  
      
    const toggleMenu=()=>{
      setIsOpen(!isOpen)
    }
    useEffect(()=>{
      const handleScroll = ()=>{
        if(window.scrollY > 50){
          setIsScrolled(true)
        }
        else{
          setIsScrolled(false)
        }
      }
      window.addEventListener("scroll", handleScroll)
      return ()=>{
        window.removeEventListener("scroll", handleScroll)
      }
    },[])
  return (
    <AppContext.Provider value={{
        toggleMenu:toggleMenu,
        isOpen:isOpen,
        isScrolled:isScrolled,
        error:error,
        videoRef:videoRef,
        barCode:barCode, data:data,
        handleInput:handleInput,
        startScanner:startScanner,
        product:product,
        handleScan:handleScan
    }}>{children}</AppContext.Provider>
  )
}

