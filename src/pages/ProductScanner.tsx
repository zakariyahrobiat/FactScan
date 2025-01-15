
import CameraScanner from "../components/camera-scanner/CameraScanner"
import NavBar from "../components/navBar/NavBar"
import ScanHero from "../components/scanHero-section/ScanHero"
const ProductScanner = () => {
  return (
    <div>
        <NavBar/>
        <ScanHero/>
        <CameraScanner/>
    </div>
  )
}

export default ProductScanner