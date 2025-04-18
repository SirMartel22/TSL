import React,{ useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(

        <nav className = "">
            <div className = "">

                <div className = "">
                    <h1> The Surprise Lounge </h1>
                 </div>

                <ul className="">
                    <li className= ""> Home </li>
                    <li className= ""> Packages </li>
                    <li className= ""> Services </li>
                    <li className= ""> Testimonials </li>
                    <li className= ""> Contact </li>
                </ul>

                <div className = 'headerBtn'>
                    <button className="btn book-surprise"> Book Now </button>
                </div>


            </div>


        </nav>
    )


}

export default Navbar