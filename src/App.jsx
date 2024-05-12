import { AboutSect } from "./components/AboutSect"
import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import { Service_Sect } from "./components/ServiceSec"
import { Accordian } from "./components/Accordian"
import { EnquiryForm } from "./components/EnquiryForm"
import Footer from "./components/footer"




function App() {



// console.log(cards[0].card_title)

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSect />
      <Service_Sect/> 
      <Accordian/>
      <EnquiryForm/>
      <Footer/>




      </>
  )
}

export default App
