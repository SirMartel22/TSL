import React,{ useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Menu, X} from "lucide-react"


const Navbar = () => {

    const navItems = [
        { label: "Home", href: "#"},
        { label: "About", href: "#"},
        { label: "Services", href: "#"},
        { label: "Testimonials", href: "#"},
        { label: "Contact", href: "#"},
    ];

    const [mobileResponsive, setMobileResponsive] = useState(false)

    const setResponsiveness = () => {
        setMobileResponsive(!mobileResponsive)
    }
   
    
    return(
        <nav className = "sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80">
            <div className= "container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">

                    {/* logo div */}
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-30 mr-2" src={logo} alt="logo"/>
                          
                    </div>

                    {/* Navlinks */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index)=>{
                            return(
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            )
                              
                            })}
                    </ul>
                    
                    {/* Nav button */}
                    <div className=" hidden lg:flex justify-center items-center space-x-12 ml-14">
                        <button className="bg-gradient-to-r from-[#FC466B] to-[#A855F7]  text-white font-bold py-2 px-4 rounded-md">Book Now</button>

                    </div>
                    
                    {/* Mobile Responsiveness */}

                    <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={setResponsiveness}>
                                {mobileResponsive ? <X /> : <Menu />}
                            </button>
                    </div>

                </div>
                
                {/* Mobile links */}
                {mobileResponsive && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-start lg:hidden">
                        <ul>
                            {navItems.map((item, index)=> {
                                return(
                                    <li key={index} className="py-4 left-0">
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="flex space-x-6">
                            <button className="bg-gradient-to-r from-[#FC466B] to-[#A855F7]  text-white font-bold py-2 px-4 rounded-md">Book Now</button>
                        </div>
                    </div>
                )}

            </div>

        </nav>
    )


}

export default Navbar