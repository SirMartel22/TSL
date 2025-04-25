import React,{ useState, useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import avatar from '../assets/avatar.png'


const Testimonial = () => {


    const testimonial = [
        {
            src: avatar,
            name: 'Sarah Johnson',
            role: 'Birthday Celebration',
            message: "The team at the Surprise Lounge created an absolutely magical birthday experience for my husband. The attention to detail was incredible and the surprise element was executed flawlessly",
            rating: ""
        },

        {
            src: avatar,
            name: 'Sarah Johnson',
            role: 'Birthday Celebration',
            message: "The team at the Surprise Lounge created an absolutely magical birthday experience for my husband. The attention to detail was incredible and the surprise element was executed flawlessly",
            rating: "",
        },

        {
            src: avatar,
            name: 'Sarah Johnson',
            role: 'Birthday Celebration',
            message: "The team at the Surprise Lounge created an absolutely magical birthday experience for my husband. The attention to detail was incredible and the surprise element was executed flawlessly",
            rating: ""
        },
    ];
        
    // py-8 px-24 md:px-20 px-24
    
    return(

        <div className = " w-full flex flex-col justify-center items-center pt-8 pb-8 px-8 mt-16 lg:mt-24 lg:px-20 lg:mb-16 lg:pt-8" id='testimonials'>
            
            <div className = 'testimonial-header-text text-center'>
                <h1 className="text-white tracking-wide py-4  font-bold text-4xl md:text-4xl lg:text-5xl">
                    What Our <span className="bg-gradient-to-r from-[#ff5e62] to-[#a855f7] text-transparent bg-clip-text">Clients</span> Say
                    </h1>
                <p className = "text-neutral-500 py-5 max-w-2xl  text-[14px] lg:text-[16px] md:text-[14px]">Don't just take our word for it. Here is what our clients have to say
                    about their experiences with The Surprise Lounge
                </p>
            </div>

            <div className= 'grid lg:grid-cols-3 gap-8 px-1 py-1 '>

                {testimonial.map((card) => {
                    return(
                    <div className = "bg-[#0d0b07] py-6 px-4 text-neutral-500 rounded-md border border-pink hover:bg-hover hover:border-none">
                        <div className="flex"> 
                            <Star color="pink" />
                            <Star color="pink" />
                            <Star color="pink" />
                            <Star color="pink" />
                            <Star color="pink" />
                        </div>
                       
                        <p className="my-6  text-[12px] lg:text-[14px] md:text-[14px]">{card.message}</p>

                        <div className= "flex justify-start items-center space-x-6"> 

                            <div className = 'w-12 h-12'> 
                                <img className="h-full w-full object-cover" src= {card.src} />
                            </div>

                            <div className = 'name-role'> 
                                <h4>{card.name}</h4>
                                <h6>{card.role}</h6>
                            </div>
                        </div>
                    </div>
                )
                })}

            </div>

        </div>
    )
}

export default Testimonial