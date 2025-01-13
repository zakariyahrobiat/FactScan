import { createContext, useState } from "react"
import { PropsWithChildren } from "react"
interface AuthContextType{
count:number,
toggleMenu:()=>void,
isOpen:boolean
}
export const AppContext = createContext<AuthContextType>({
count:0,
toggleMenu:()=>{},
isOpen:false
})
export const AuthContext = ({children}:PropsWithChildren) => {
    const [count, setCount]= useState<number>(0)
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu=()=>{
      setIsOpen(!isOpen)
    }
  return (
    <AppContext.Provider value={{
        count:count,
        toggleMenu:toggleMenu,
        isOpen:isOpen
    }}>{children}</AppContext.Provider>
  )
}

