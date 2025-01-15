import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductScanner from "../pages/ProductScanner";
const AppRoutes= createBrowserRouter([
    {
      path:"/",
      element:<Home/>  
    },
    {
      path:"/scanner",
      element:<ProductScanner/>
    }
])

export default AppRoutes