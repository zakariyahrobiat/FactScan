
import UseAuth from "../../hooks/UseAuth"

const CameraScanner = () => {

    const {error, videoRef, barCode, data, handleInput, productDetails, startScanner, handleScan} = UseAuth() 
    
    const {inputBarcode}= data
  return (
    <div className="w-full ">
    <div className="w-full  bg-slate-100 px-5 md:px-20 py-10 gap-10 grid md:grid-cols-2 items-start h-full">
    <div className="scanner-overlay  ">
    <div className="overlay"></div>
  <div className="overlay-frame "> <div className="absolute inset-0 border-2 border-dashed border-green-500 rounded-md" /></div>
    
      {/* <p className="text-gray-500">Align the barcode within the frame.</p> */}
      <video ref={videoRef} className=" rounded shadow-md" />
     
      {barCode && <><p className="absolute bottom-10 text-green-500 bg-white px-5 py-2 rounded-lg shadow-md font-medium">Detected Barcode: <span className="font-bold">{barCode}</span></p>
      <button className=" absolute bottom-1 bg-blue-500 text-white px-5 py-2 rounded shadow-md font-medium"
      onClick={ handleScan} >
         Scan Now
      </button>
      </>
      || <button
          className=" absolute bottom-3  bg-blue-500 text-white px-5 py-2 rounded shadow-md font-medium"
          onClick={startScanner}
        >
          Start Scanning
        </button>}
      {error && <p className="absolute top-2 text-red-500 bg-white px-4 py-2 rounded-lg shadow-md font-medium">Error: <span className="font-bold">{error}</span></p>}
      
    </div>

    <div className="p-6 h-full bg-white rounded shadow-md flex flex-col items-center">
 
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
        disabled={barCode !== null} 
      />
      <button
      className={`mt-4 px-6 py-2 rounded-md text-white ${
        inputBarcode
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-300 cursor-not-allowed"
      }`}
      disabled={!inputBarcode}
      onClick={handleScan}
      >
        Scan Now
      </button>
    </div>
  </div>
 
    {productDetails && (
      <div className="w-full my-8 px-5 md:px-20 md:py-10 bg-white rounded shadow-md">
      <div className=" rounded bg-gray-50 p-6 md:px-20 shadow-md transition hover:border-2 hover:border-blue-500 hover:-translate-y-2">
        <h2 className="text-2xl font-bold text-center pb-5 text-gray-800">Scan Results</h2>
 <h3 className="text-lg font-bold pb-2">Product Name: <span className="font-semibold">{productDetails.product["Product Name"] }</span></h3>
 <p className="text-lg font-bold pb-2">Category: <span className="font-semibold">{productDetails.product.category }</span></p>
 <p className="text-lg font-bold pb-2">Authenticity: <span className="font-semibold">{productDetails.product.Authenticity }</span></p>
 <p className="font-bold text-lg ">{productDetails.message}</p>
 <button className="bg-blue-500 text-white px-5 py-2 rounded shadow-md font-bold">Learn More</button>
</div>
</div>
    ) 
    }

  </div>
 
  )
}

export default CameraScanner