import { useState } from 'react'
import './App.css'


//importing all the components into the appjs

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Package from './Components/Package/Package'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />

      </div>
      
      <Package />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
