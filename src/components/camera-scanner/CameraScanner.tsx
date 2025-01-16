
import UseAuth from "../../hooks/UseAuth"

const CameraScanner = () => {
//  const startScanner=()=>{
//   console.log("yes");
  
//  }
    const {error, videoRef, barCode, data, handleInput, startScanner} = UseAuth() 
    const {inputBarcode}= data
  return (
    
    <div className="w-full px-5 md:px-20 bg-slate-100 py-4 gap-10 grid gri md:grid-cols-2 items-start h-full">
    <div className="scanner-overlay  ">
    <div className="overlay"></div>
  <div className="overlay-frame  "></div>
     {/* <div className="absolute inset-0 border-4 border-dashed border-green-500 rounded-md" /> */}
      {/* <p className="text-gray-500">Align the barcode within the frame.</p> */}
      <video ref={videoRef} className=" rounded shadow-md" />
     
      {barCode && <p className="mt-4 text-green-600 font-medium">Detected Barcode: <span className="font-bold">{barCode}</span></p>}
      {error && <p className="mt-4 text-red-500 font-medium">Error: <span className="font-bold">{error}</span></p>}
      <button
          className=" absolute bottom-3 bg-blue-500 text-white px-5 py-2 rounded shadow-md"
          onClick={startScanner}
        >
          Start Scanning
        </button>
    </div>

    <div className="p-6 bg-white rounded shadow-md flex flex-col items-center">
 
    <p className="text-gray-600 text-lg font-medium mb-4">
          Align the barcode within the frame or enter it manually
        </p>
      <input
        type="text"
        placeholder="Enter barcode manually"
        name="inputBarcode"
        value={inputBarcode}
        onChange={handleInput}
        className="border border-gray-300 rounded-md px-4 py-2 w-3/4 md:w-2/3 focus:ring focus:ring-blue-300 focus:outline-none"
        inputMode="numeric"
        disabled={barCode !== null} // Disable if barcode is detected
      />
      <button
      className={`mt-4 px-6 py-2 rounded-md text-white ${
        inputBarcode
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-300 cursor-not-allowed"
      }`}
      disabled={!inputBarcode}
      >
        Scan Now
      </button>
    </div>
  </div>
 
  )
}

export default CameraScanner