import Nav from "./components/nav/Nav"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Experience from "./sections/experience/Experience"
import Footer from "./sections/footer/Footer"
import Hero from "./sections/hero/Hero"
import Work from "./sections/work/Work"

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
