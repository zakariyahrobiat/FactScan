import { useContext } from "react"
import { AppContext } from "../context/AuthContext"
const UseAuth = () => {
  return useContext(AppContext)
}

export default UseAuth