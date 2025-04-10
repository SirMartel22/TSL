import React,{ useState, useEffect, useRef } from 'react'
import './Navbar.css'


const Navbar = () => {

    return(

        <div className = "navbar-container">
            <div className = 'navbar'>

                <div className = "logo">
                    <h1> The Surprise Lounge </h1>
                </div>

               

                <ul>
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


        </div>
    )


}

export default Navbar