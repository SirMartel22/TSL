import React,{ useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(

        <nav className = "bg-white shadow-mg fixed top-0 left-0 right-0 z-50">
            <div className = 'max-w-7xl mx-auto px-4 flex justify-between items-center'>

                <div className = "text-2xl font-bold text-orange-600">
                    <h1> The Surprise Lounge </h1>
                </div>

                <ul className="hidden md: flex space-x-6">
                    <li> Home </li>
                    <li> Packages </li>
                    <li> Services </li>
                    <li> Testimonials </li>
                    <li> Contact </li>
                </ul>

                <div className = 'headerBtn'>
                    <button className="btn book-surprise"> Book Now </button>
                </div>


            </div>


        </nav>
    )


}

export default Navbar