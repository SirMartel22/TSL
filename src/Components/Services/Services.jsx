import React,{ useState, useEffect, useRef } from 'react';
import {FaCommentDots, FaBoxOpen, FaClock, FaStar} from "react-icons/fa";


const steps = [
    {
        id: 1,
        title: "Consult & Plan",
        description: "Tell us about the occasion, the recipient, and your budget. Our surprise experts will help craft the perfect experience.",
        icon: <FaCommentDots className="text-pink-400 text-2xl"/>,
    },
    {
        id: 2,
        title: "Customize Package",
        description: "We curate a personalized surprise package tailored to your specifications with premium gifts and unique experiences.",
        icon: <FaBoxOpen className="text-pink-400 text-2xl"/>,
    },
    {
        id: 3,
        title: "Schedule Delivery",
        description: "Choose the perfect moment for the surprise, and we’ll coordinate the delivery seamlessly for maximum impact.",
        icon: <FaClock className="text-pink-400 text-2xl"/>,
    },
    {
        id: 2,
        title: "Customize Package",
        description: "Watch as your thoughtfully planned surprise unfolds, creating joy and unforgettable memories that last a lifetime.",
        icon: <FaStar className="text-pink-400 text-2xl"/>,
    },
];


const Services = () => {

    return(
        // pt-8 pb-8 px-8  mt-16 lg:pt-14 lg:pb-20 lg:px-24

       <section className = " text-white py-8 px-24 md:px-20 px-24 ">

        {/* Header of the services section */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-4xl sm:text-4xl lg:text-5xl tracking-wide py-5">
                How It <span className="bg-gradient-to-r from-[#ff5e62] to-[#a855f7] bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-neutral-500 md:text-base mt-4 max-w-2xl mx-auto  text-[12px] lg:text-[14px] md:text-[14px] ">
            Creating the perfect surprise is easier than you think. 
            Our four-step process ensures a seamless experience from conception to delivery.
            </p>
        </div>

        {/* How it works timeline */}
        <div className="relative border-1-2 border-pink-400 ml-5">
            {steps.map((step, index)=> {
                return (
                    <div key={step.id} className={`mb-12 flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse' }`}>
                        
                        {/* Connector Dot and line */}
                        <div className="flex flex-col items-center">
                            <div className="bg-pink text-white w-8 rounded-full flex items-center, justify-center font-bold z-10"> 
                                {step.id}
                            </div>

                                {index < steps.length - 1 && (
                                    <div className= "w-1 bg-pink h-full mt-2 mb-2"> </div>
                                )} 

                            </div>

                            {/* Card */}
                            
                            <div className={`bg-[#1a1a2e] rounded-lg p-6 ml-6 mr-6 shadow-lg w-full md:w-1/2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}> 
                                <div className="flex items-center gap-4 mb-2">
                                    <div>{steps.icon}</div>
                                    <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                                </div>
                                <p className="text-neutral-500 text-sm">{step.description}</p>
                            </div>

                        </div>

             
                )
            })}
        </div>

       </section>
    )


}

export default Services