import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import UseAuth from "../../hooks/UseAuth"
const NavBar = () => {
  const {toggleMenu, isOpen, isScrolled}= UseAuth()
  return (
    <header className={`flex justify-between items-center w-full px-5 md:px-20 py-3  fixed z-10 ${isScrolled ? "bg-white text-black shadow-2xl": "bg-transparent text-white"} transition-all duration-300`}>
      <Link to="/">
        <p className="font-mono font-bold text-lg">FactScan</p>
      </Link>
      <ul className={`absolute md:static md:flex justify-between items-center uppercase gap-x-5  bg-gray-800 md:bg-transparent right-0 top-full w-2/3 text-left md:w-auto transition-opacity duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
        <li className="p-4 md:p-0"><Link to="/scanner" className="hover:text-gray-400 font-bold md:font-medium">Scan Product</Link></li>
        <li className="p-4 md:p-0"><Link to="" className="hover:text-gray-400 font-bold md:font-medium">Search</Link></li>
        <li className="p-4 md:p-0 "><Link to="" className="hover:text-gray-400 font-bold md:font-medium">About</Link></li>
        <li className="p-3 md:p-0"><Link to="" className="hover:text-gray-400 font-bold md:font-medium">Contact</Link></li>
        <button className="my-3 md:m-0 md:hidden bg-button text-white py-1 px-3 md:py-2 md:px-5 font-bold rounded-lg w-full">
      Sign Up
      </button>
          </ul>
      <button className="hidden md:block bg-button text-white py-1 px-3 md:py-2 md:px-5 font-bold rounded-lg">
      Sign Up
      </button>
      <div className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
      <FaBars/>
      </div>
    </header>
  )
}

export default NavBar