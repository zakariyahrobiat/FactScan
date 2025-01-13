import BackgroundLayout from "./Layout/BackgroundLayout"
import NavBar from "./components/navBar/NavBar"
import Hero from "./components/hero-section/Hero"
const Home = () => {
  return (
    <BackgroundLayout>
      <NavBar/>
      <Hero/>
    </BackgroundLayout>
  )
}

export default Home