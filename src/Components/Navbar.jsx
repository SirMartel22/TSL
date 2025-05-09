import React,{ useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import {Menu, X} from "lucide-react"
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Navbar = () => {

    const navItems = [
        { label: "Home", target: "hero"},
        { label: "About", target: "about"},
        { label: "How it Works", target: "works"},
        { label: "Testimonials", target: "testimonials"},
        { label: "Contact", target: "contacts"},
    ];

    const [mobileResponsive, setMobileResponsive] = useState(false)

    const setResponsiveness = () => {
        setMobileResponsive(!mobileResponsive)
    }
   
    const headRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(headRef.current, {
            y: 25,
            opacity: 0.3,
        },
        
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out'
        })
    }, [])
    
    return(
        <nav className = "sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80 lg:px-24 md:w-full">
            <div  className= "header-container container px-4 mx-auto relative text-sm">
                <div ref={ headRef } className="flex justify-between items-center">

                    {/* logo div */}
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-30 mr-2" src={logo} alt="logo"/>
                          
                    </div>

                    {/* Navlinks */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index)=>{
                            return(
                                <li key={index} className="hover:bg-grey">
                                    <ScrollLink to={item.target} smooth={true} duration={1500} offset={-70} className="hover:border-pink cursor-pointer">{item.label}</ScrollLink>
                                </li>
                            )
                              
                            })}
                    </ul>
                    
                    {/* Nav button */}
                    <div className=" hidden lg:flex justify-center items-center space-x-12 ml-14">
                        <ScrollLink to='contacts' smooth={true} duration={1500} offset={-70}>
                            <button className="bg-gradient-to-r from-[#FC466B] to-[#A855F7]  text-white py-2 px-4 rounded-md hover:opacity-90 hover:scale-105 transition duration-300">Book Now</button>
                            
                        </ScrollLink>

                    </div>
                    
                    {/* Mobile Responsiveness */}

                    <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={setResponsiveness}>
                                {mobileResponsive ? <X /> : <Menu />}
                            </button>
                    </div>

                </div>
                
                {/* Mobile links display   */}
                {mobileResponsive && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-start lg:hidden">
                        <ul>
                            {navItems.map((item, index)=> {
                                return(
                                    <li key={index} className="py-4 left-0">
                                        <ScrollLink to={item.target} smooth={true} duration={1500} offset={-70} className="hover:underline cursor-pointer">{item.label}</ScrollLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="flex space-x-6">
                            <ScrollLink to='contacts' smooth={true} duration={500} offset={-70}>
                                <button className="bg-gradient-to-r from-[#FC466B] to-[#A855F7] text-white py-2 px-4 rounded-lg hover:opacity-90 hover:scale-105 transition duration-300">Book Now</button>
                            </ScrollLink>
                        </div>
                    </div>
                )}

            </div>

        </nav>
    )


}

export default Navbar