import React,{ useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import {Facebook, Instagram, Twitter} from 'lucide-react'
import { RiTiktokLine } from "react-icons/ri";


const Footer = () => {

    return(

        <div className = "flex flex-col justify-between items-center space-y-9 border-t border-neutral-700/80 pt-8 pb-8 px-8 mt-16 lg:pt-14 lg:pb-20 lg:px-24 ">
            

            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-16 md:grid-cols-2 lg:space-x-16 space-y-8 text-[13px] md:text-[14px] lg:text-[15px]">

                {/* logo section */}
                <div className="logo">
                    <img className="h-10 w-30 mr-2" src={logo} alt="logo" />
                    <p className=" w-full text-neutral-500 my-8">
                        Creating an unforgettable moments through personalised surprise
                        packages for every special occassion 
                    </p>

                    <div className = "flex space-x-6">
                        <a href=""><Facebook color="pink" /></a>
                        <a href="https://www.instagram.com/thesurprise_lounge?igsh=MXcxZ2Q5eDZmdnF6ZQ%3D%3D&utm_source=qr"><Instagram color="pink" /></a>
                        <a href=""><Twitter color="pink" /></a>
                        <a href="https://www.tiktok.com/@thesurprise_lounge?_t=ZM-8vmgoBBN4SL&_r=1"><RiTiktokLine color="pink" /></a>
                    </div>

                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col space-y-3 text-neutral-500">
                    <h4 className="text-white font-bold py-3"> Quick Links</h4>

                    <div className="space-y-2 flex flex-col">
                        <a href="">Home</a>
                        <a href="">Services</a>
                        <a href="">How It Works</a>
                        <a href="">Testimonials</a>
                        <a href="">Contact</a>
                    </div>
                   
                </div>

                  {/* ServicesSection */}
                  <div  className="flex flex-col space-y-3 text-neutral-500">

                        <h4 className="text-white font-bold py-3"> Services</h4>
                        <div className="space-y-2">
                            <p className="text-neutral-500">Birthday Surprises</p>
                            <p className="text-neutral-500">Anniversary Packages</p>
                            <p className="text-neutral-500">Celebration Boxes</p>
                            <p className="text-neutral-500">Corporate Events</p>
                            <p className="text-neutral-500">Custom surprises </p>
                        </div>
                   </div>

                {/* ServicesSection */}
                
                <div className="flex flex-col space-y-3 text-neutral-500 ">
                    <h4 className="text-white font-bold py-3 "> Contact Us</h4>
                    <div className="space-y-2">

                        <p className="text-neutral-500">
                            hello@thesurpriselounge.com</p>
                        <p className="text-neutral-500 w-90">
                            123 Surprise Avenue, Suite 101 New York Ilorin, Nigeria
                        </p>
                        <p className="text-neutral-500">08123456789</p>
                    
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 grspace-x-64 text-neutral-400 lg:pt-24 text-[13px] md:text-[14px] lg:text-[15px]">
                <div>
                    <p>&copy; 2025 The Surprise Lounge. All Rights Reserved</p>
                    
                </div>

                <div className="flex justify-between space-x-6">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Plicy</p>

                </div>
            </div>
        </div>
    )


}

export default Footer