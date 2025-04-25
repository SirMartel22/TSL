import React,{ useState, useEffect, useRef } from 'react'
import bgImg from '../assets/bg-img.png'
import { Gift } from "lucide-react"

const Hero = () => {

    return(
        <div className= "h-screen flex flex-col items-center lg:mt-10 lg:px-20 mb-96 lg:mb-8">
                
            <div className="flex w-[300px] md:w-[400px] lg:w-[400px] rounded-md justify-center items-center border border-pink bg-tranparent py-2 mb-10 space-x-3">
                <Gift color="pink" />
                <p className="text-[12px] md:text-[13px] lg:text-[14px]">Make Every Moment Unforgettable</p>
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide max-w-5xl">
                Crafting <span className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] bg-clip-text text-transparent">
                    Surprise Moments</span> That Lasts a Lifetime
            </h1>

            <p className="mt-5 md:mt-7 lg:mt-10 text-lg text-center text-neutral-500 max-w-3xl text-[12px] md:text-[13px] lg:text-[14px]">
                Elevate Your Celebration with our expertly curated surprise
                packages designed to create memories that be cherished forever
            </p>
            

            {/* hero buttons */}
            <div className="flex justify-center items-center mt-10 space-x-4 md:space-x-12 text-[12px] md:text-[14px] lg:text[15px] ">
                <button className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] w-70 h-70 py-3 px-3 rounded-md"> Book Your Surprise</button>
                <button className="bg-transparent border border-pink w-70 h-70 py-3 px-3 rounded-md">Explore Packages</button>
            </div>

              {/* hero videos */}
              <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center my-10 sm:space-y-4 md:space-y-0">
                    <video autoPlay loop muted className="rounded-lg w-full border border-pink shadow-pink mx-2 my-4">
                        <source src='https://drive.google.com/uc?export=download&id=1PAAaaMSuJ5yDoFZB5B1geHZzC4psu2Lx' type="video/mp4" />
                        Your browser does not support the video tag
                    </video>

                    <video autoPlay loop muted className="rounded-lg w-full border border-pink shadow-pink mx-2 my-4">
                        <source src='https://drive.google.com/uc?export=download&id=1-bNmPLIdy8QalRz2wRGsy_D8McLXBucr' type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
              </div>

           
        </div>
    )


}

export default Hero