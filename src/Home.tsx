import BackgroundLayout from "./Layout/BackgroundLayout"
import NavBar from "./components/navBar/NavBar"
import Hero from "./components/hero-section/Hero"
import Feature from "./components/feature-section/Feature"
const Home = () => {
  return (
    <BackgroundLayout>
      <NavBar/>
      <Hero/>
      <Feature/>
    </BackgroundLayout>
  )
}

export default Home