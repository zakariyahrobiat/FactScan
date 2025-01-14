
import barCode from "../../assets/images/images (1).png"
import trusted from "../../assets/images/images (3).png"
import phone from '../../assets/images/barcode-scanner.jpg'
const Feature = () => {
  return (
    <div className="w-full md:px-20 py-10">
        <h1 className="text-xl md:text-3xl font-bold">Why Choose Our App?</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-x-5">
            <div className="bg-slate-200 shadow-2xl py-3 px-5 rounded-xl">
                <div className="flex justify-center"><img src={barCode} alt="" srcSet="" /></div>
                <h1 className="text-xl font-bold">Quick Scanning</h1>
                <p className="text-base font-medium">Instantly scans barcodes using your camera.</p>
            </div>
            <div className="bg-slate-200 shadow-2xl py-3 px-5 rounded-xl">
            <div className="flex justify-center"><img src={trusted} alt="" srcSet="" /></div>
                <h1 className="text-xl font-bold">Trusted Sources</h1>
                <p className="text-base font-medium">Data verified with authentic product databases.</p>
            </div>
            <div className="bg-slate-200 shadow-2xl py-3 px-5 rounded-xl">
            <div className="flex justify-center"><img src={barCode} alt="" srcSet="" /></div>
                <h1 className="text-xl font-bold">Wide Coverage</h1>
                <p className="text-base font-medium">Supports food, cosmetics, and more.</p>
            </div>
            <div className="bg-slate-200 shadow-2xl py-3 px-5 rounded-xl">
            <div className="flex justify-center"><img src={phone} alt="" srcSet="" /></div>
                <h1 className="text-xl font-bold">Easy to Use</h1>
                <p className="text-base font-medium">Simple interface for everyone.Simple interface for everyone.</p>
            </div>
        </div>
    </div>
  )
}

export default Feature