import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-full px-10 py-3 bg-white fixed z-10">
      <Link to="/">
        <p className="font-mono font-bold text-lg">FactScan</p>
      </Link>
      <ul className="flex justify-between items-center uppercase gap-x-5 font-medium">
        <li><a href="">Scan Product</a></li>
        <li><a href="">Search</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
          </ul>
      <button className="bg-button text-white py-1 px-3 md:py-2 md:px-5 font-bold rounded-lg">
      Sign Up
      </button>
    </header>
  )
}

export default NavBar