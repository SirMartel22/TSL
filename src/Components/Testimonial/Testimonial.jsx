import React,{ useState, useEffect, useRef } from 'react'
import './Testimonial.css'


const Testimonial = () => {


    const testimonial = [
        {
            src: "src",
            name: 'Sarah Johnson',
            role: 'Birthday Celebration',
            message: "The team at the Surprise Lounge created an absolutely magical birthday experience for my husband. The attention to detail was incredible and the surprise element was executed flawlessly",
            rating: ""
        },

        {
            src: "src",
            name: 'Sarah Johnson',
            role: 'Birthday Celebration',
            message: "The team at the Surprise Lounge created an absolutely magical birthday experience for my husband. The attention to detail was incredible and the surprise element was executed flawlessly",
            rating: "",
        },

        {
            src: "src",
            name: 'Sarah Johnson',
            role: 'Birthday Celebration',
            message: "The team at the Surprise Lounge created an absolutely magical birthday experience for my husband. The attention to detail was incredible and the surprise element was executed flawlessly",
            rating: ""
        },
    ];
        
    
    return(

        <div className = "testimonial-container">
            
            <div className = 'testimonial-header-text'>
                <h1>What Out Clients Say</h1>
                <p>Don't just take our word for it. Here is what our clients have to say
                    about their experiences with The Surprise Lounge
                </p>
            </div>

            <div className= 'testimonial-card'>

                {testimonial.map((card) => {
                    return(
                    <div>
                        <p>{card.rating}</p>
                        <p>{card.message}</p>

                        <div className= "src-name"> 
                            <div className = 'src'> 
                                <img srcSet= {card.src} />
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