import image from "../../assets/images/barcode1.jpg"

const Hero = () => {
  return (
    <div className="hero-bg h-96 mt-16 md:mt-16 text-white md:grid grid-cols-2 justify-between items-center gap-10">
       <img src={image} alt="" srcSet="" /> 
    </div>
  )
}

export default Hero