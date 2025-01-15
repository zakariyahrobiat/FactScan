import BackgroundLayout from "../Layout/BackgroundLayout"
import NavBar from "../components/navBar/NavBar"
import Hero from "../components/HomeHero-section/HomeHero"
import Feature from "../components/feature-section/Feature"
import AppFunction from "../components/feature-section/AppFunction"
import Footer from "../components/footer-section/Footer"
const Home = () => {
  return (
    <BackgroundLayout>
      <NavBar/>
      <Hero/>
      <Feature/>
      <AppFunction/>
      <Footer/>
    </BackgroundLayout>
  )
}

export default Home