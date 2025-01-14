import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import UseAuth from "../../hooks/UseAuth"
const NavBar = () => {
  const {toggleMenu, isOpen, isScrolled}= UseAuth()
  return (
    <header className={`flex justify-between items-center w-full px-5 md:px-20 py-3 text-white fixed z-10 ${isScrolled ? "bg-white text-black shadow-2xl": "bg-transparent"} transition-all duration-300`}>
      <Link to="/">
        <p className="font-mono font-bold text-lg">FactScan</p>
      </Link>
      <ul className={`absolute md:static md:flex justify-between items-center uppercase gap-x-5  bg-gray-800 md:bg-transparent right-0 top-full w-2/3 text-left md:w-auto md:opacity-100 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <li className="p-4 md:p-0  "><a href="" className="hover:text-gray-400 font-bold md:font-medium">Scan Product</a></li>
        <li className="p-4 md:p-0  "><a href="" className="hover:text-gray-400 font-bold md:font-medium">Search</a></li>
        <li className="p-4 md:p-0  "><a href="" className="hover:text-gray-400 font-bold md:font-medium">About</a></li>
        <li className="p-3 md:p-0 "><a href="" className="hover:text-gray-400 font-bold md:font-medium">Contact</a></li>
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