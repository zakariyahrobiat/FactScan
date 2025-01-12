import { createContext, useState } from "react"
import { PropsWithChildren } from "react"
interface AuthContextType{
count:number
}
export const AppContext = createContext<AuthContextType>({
count:0
})
export const AuthContext = ({children}:PropsWithChildren) => {
    const [count, setCount]= useState<number>(0)
  return (
    <AppContext.Provider value={{
        count:count
    }}>{children}</AppContext.Provider>
  )
}

