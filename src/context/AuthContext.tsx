import { createContext, useState } from "react"
import { PropsWithChildren } from "react"
interface AuthContextType{
toggleMenu:()=>void,
isOpen:boolean
}
export const AppContext = createContext<AuthContextType>({
toggleMenu:()=>{},
isOpen:false
})
export const AuthContext = ({children}:PropsWithChildren) => {
      const [isOpen, setIsOpen] = useState(false)
    const toggleMenu=()=>{
      setIsOpen(!isOpen)
    }
  return (
    <AppContext.Provider value={{
        toggleMenu:toggleMenu,
        isOpen:isOpen
    }}>{children}</AppContext.Provider>
  )
}

