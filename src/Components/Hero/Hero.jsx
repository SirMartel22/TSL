import React,{ useState, useEffect, useRef } from 'react'
import './Hero.css'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'


const Hero = () => {

    return(
        <div className= "flex flex-col items-center mt-6 lg:mt-20">
                
            {/* <div className = "">
                <p>Make Every Moments Unforgettable</p>
            </div> */}

            <h1 className="font-bold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Crafting <span className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] bg-clip-text text-transparent">
                    Surprise Moments</span> That Lasts a Lifetime
            </h1>

            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Elevate Your Celebration with our expertly curated surprise
                packages designed to create memories that be cherished forever
            </p>

            <div className="flex flex-row justify-center items-center mt-10 space-x-12">
                <button className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] w-70 h-70 py-3 px-3 rounded-md"> Book Your Surprise</button>
                <button className="bg-transparent border border-pink w-70 h-70 py-3 px-3 rounded-md">Explore Packages</button>
            </div>
        </div>
    )


}

export default Hero