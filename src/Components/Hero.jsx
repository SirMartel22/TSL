import React,{ useEffect, useRef } from 'react'
// import bgImg from '../assets/bg-img.png'
import { Gift } from "lucide-react"
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const momentRef = useRef(null)
    const headerTitleRef = useRef(null) 
    const headerTextRef = useRef(null) 
    const buttonRef = useRef(null) 
    const videoRef = useRef(null) 


    
    useEffect(() => { 

        const timeline = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power2.inOut'
            },
        });

    
        const elements = [momentRef.current,
                            headerTitleRef.current,
                            headerTextRef.current,
                            buttonRef.current,
                            videoRef.current
                        ];

        elements.forEach((el, index) => {
            timeline.fromTo(el, {
                y: 50,
                opacity: 0.2,
            },
            
            {
                y: 0,
                opacity: 1,
                // duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: el,
                    // start: '90%',
                    toggleAction: 'play none none none'
                },
            
            },
            `-=${index * 0.2}`
            );
        })


    }, [])
    return(
        <div className= "flex flex-col items-center mt-8 lg:mt-16 lg:px-20 lg:mb-16" id='hero'>
                
            <div ref={momentRef} className="flex w-[300px] md:w-[400px] lg:w-[400px] rounded-md justify-center items-center border border-pink bg-tranparent py-2 mb-10 space-x-3">
                <Gift color="pink" />
                <p className="text-[12px] md:text-[13px] lg:text-[14px]">Make Every Moment Unforgettable</p>
            </div>

            <h1  ref={headerTitleRef}  className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide max-w-5xl">
                Crafting <span className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] bg-clip-text text-transparent">
                    Surprise Moments</span> That Lasts a Lifetime
            </h1>

            <p  ref={headerTextRef}  className="mt-5 md:mt-7 lg:mt-10 text-lg text-center text-neutral-500 max-w-3xl text-[14px] md:text-[15px] lg:text-[16px]">
                Elevate Your Celebration with our expertly curated surprise
                packages designed to create memories that be cherished forever
            </p>
            

            {/* hero buttons */}
            <div ref={buttonRef} className="flex justify-center items-center mt-10 space-x-4 md:space-x-12 text-[12px] md:text-[14px] lg:text[15px] ">
                <ScrollLink to='contacts' smooth={true} duration={1500} offset={-70}>
                    <button className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] w-70 h-70 py-3 px-3 rounded-md hover:opacity-90 hover:scale-105 transition duration-300"> Book Your Surprise</button>
                </ScrollLink>

                <ScrollLink to='packages' smooth={true} duration={1500} offset={-70}>
                    <button className="bg-transparent border border-pink w-70 h-70 py-3 px-3 rounded-md hover:bg-pink hover:text-white hover:scale-105 transition duration-300">Explore Packages</button>
                </ScrollLink>
            </div>

              {/* hero videos */}
              <div ref={videoRef} className="flex flex-col md:flex-row lg:flex-row justify-center items-center my-10 space-y-4 md:space-y-0">
                    <video autoPlay loop muted className="rounded-lg w-3/4 lg:w-1/3 md:w-1/3 border border-pink shadow-pink mx-2 my-4">
                        <source src='https://res.cloudinary.com/djhfy0pr4/video/upload/v1747174143/tsl-video2_kdglq8.mov' type="video/mp4" />
                        Your browser does not support the video tag
                    </video>

                    <video autoPlay loop muted className="rounded-lg w-3/4 lg:w-1/3 md:w-1/3  border border-pink shadow-pink mx-2 my-4">
                        <source src='https://res.cloudinary.com/djhfy0pr4/video/upload/v1747174155/tsl-video3_ekuqgc.mp4' type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
              </div>

           
        </div>
    )


}

export default Hero