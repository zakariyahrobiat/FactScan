
import CameraScanner from "../components/camera-scanner/CameraScanner"
import NavBar from "../components/navBar/NavBar"
import ScanHero from "../components/scanHero-section/ScanHero"
import Footer from "../components/footer-section/Footer"
const ProductScanner = () => {
  return (
    <div>
        <NavBar/>
        <ScanHero/>
        <CameraScanner/>
        <Footer/>
    </div>
  )
}

export default ProductScanner