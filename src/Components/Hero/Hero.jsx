import React,{ useState, useEffect, useRef } from 'react'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import bgImg from '../../assets/bg-img.png'
import { Gift } from "lucide-react"


const Hero = () => {

    return(
        <div className= "h-screen flex flex-col items-center mt-6 lg:mt-10">
                
            <div className="flex w-1/4 rounded-md justify-center items-center border border-pink bg-tranparent py-2 mb-10">
                <Gift color="pink" />
                <p>Make Every Moment Unforgettable</p>
            </div>

            <h1 className="font-bold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide max-w-5xl">
                Crafting <span className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] bg-clip-text text-transparent">
                    Surprise Moments</span> That Lasts a Lifetime
            </h1>

            <p className="mt-10 text-lg text-center text-neutral-500 max-w-3xl">
                Elevate Your Celebration with our expertly curated surprise
                packages designed to create memories that be cherished forever
            </p>
            

            {/* hero buttons */}
            <div className="flex   justify-center items-center mt-10 space-x-12">
                <button className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] w-70 h-70 py-3 px-3 rounded-md"> Book Your Surprise</button>
                <button className="bg-transparent border border-pink w-70 h-70 py-3 px-3 rounded-md">Explore Packages</button>
            </div>

              {/* hero videos */}
              <div className="flex flex-row justify-center items-center my-10 space-x-12">
                    <video autoPlay loop muted className="rounded-lg w-1/3 border border-pink shadow-pink mx-2 my-4">
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag
                    </video>

                    <video autoPlay loop muted className="rounded-lg w-1/3 border border-pink shadow-pink mx-2 my-4">
                        <source src={video2} type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
              </div>

           
        </div>
    )


}

export default Hero