import image from "../assets/images/barcode.png"
import { Link } from "react-router-dom"
interface heroProps{
    heading: string,
    title: string,
    button?: string,
    link?: string,
}
const Hero = (props:heroProps) => {
    const {heading, title, button, link} = props
  return (
    <div className="hero-bg h-96 text-white grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10  px-5 md:px-20 w-full">
      <div className="w-full text-center md:text-left ">
        <h1 className="text-4xl md:text-5xl font-bold">{heading}</h1>
        <p className="text-xl py-5 font-medium">{title}</p>
        {button && link && <Link to={link}>
        <button className="bg-button py-3 text-white font-bold text-xl px-5 rounded-tl-xl rounded-br-xl">{button}</button>
        </Link> }
        
      </div>
      <div className="w-full justify-end h-96 items-center hidden md:flex">
       <img src={image} alt="" srcSet="" className="w-full object-cover" /> 
       </div>
    </div>
  )
}

export default Hero