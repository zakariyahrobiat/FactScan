import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
const AppRoutes= createBrowserRouter([
    {
      path:"/",
      element:<Home/>  
    }
])

export default AppRoutes