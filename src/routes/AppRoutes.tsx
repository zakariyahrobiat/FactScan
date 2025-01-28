import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductScanner from "../pages/ProductScanner";
import Register from "../pages/auth/Register";
const AppRoutes= createBrowserRouter([
    {
      path:"/",
      element:<Home/>  
    },
    {
      path:"/scanner",
      element:<ProductScanner/>
    },
    {
      path:"/register",
      element:<Register/>
    }
])

export default AppRoutes