import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Footer } from "./components/shared/Footer"
import Header from "./components/shared/Header"

function App() {

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
