import image from "../../assets/images/barcode.png"

const Hero = () => {
  return (
    <div className="hero-bg h-96 mt-16 md:mt-16 text-white grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 md:px-10 w-full">
      <div className="w-full text-center md:text-left px-5 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold">Verify Your Products Instantly</h1>
        <p className="text-xl py-5 font-medium">Easily scan product barcodes and know if they are genuine. Scan now to ensure the authenticity of your food and cosmetic products.</p>
        <button className="bg-button py-3 text-white font-bold text-xl px-5 rounded-tl-xl rounded-br-xl">Scan Now</button>
      </div>
      <div className="w-full justify-end h-96 items-center hidden md:flex">
       <img src={image} alt="" srcSet="" className="w-full object-cover" /> 
       </div>
    </div>
  )
}

export default Hero