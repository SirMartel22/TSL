import { useState } from 'react'


//importing all the components into the appjs

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Package from './Components/Package'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbar />
      <Hero />
      <Package />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
