import Nav from "./components/navbar/Nav"
import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
import Experience from "./sections/Experience/Experience"
import Footer from "./sections/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import Work from "./sections/Work/Work"

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
