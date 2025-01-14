import { createContext, useEffect, useState } from "react"
import { PropsWithChildren } from "react"
interface AuthContextType{
toggleMenu:()=>void,
isOpen:boolean,
isScrolled: boolean
}
export const AppContext = createContext<AuthContextType>({
toggleMenu:()=>{},
isOpen:false,
isScrolled:false,
})
export const AuthContext = ({children}:PropsWithChildren) => {
      const [isOpen, setIsOpen] = useState(false)
      const [isScrolled, setIsScrolled] = useState(false)
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
        isScrolled:isScrolled
    }}>{children}</AppContext.Provider>
  )
}

