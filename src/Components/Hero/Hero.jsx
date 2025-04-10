import React,{ useState, useEffect, useRef } from 'react'
import './Hero.css'


const Hero = () => {

    return(

        <div className = "hero-container">

            <div className = 'moments'>
                <p>Make Every Moments Unforgettable</p>
            </div>

            <div className = 'moments'>
                <h1>Crafting Surprise Moments That Lasts a Liferime</h1>
                <p>Elevate Your Celebration with our expertly curated surprise
                    packages designed to create memories that be cherished forever
                </p>
                
            </div>

            <div className = "hero-container">
                <button className= 'btn hero-btn book-surprise'> Book Your Surprise</button>
                <button className= 'btn hero-btn explore-btn'> Explore packages </button>
            </div>

            <div className = 'scrolldown-arrow'>
                    V
            </div>
            
        </div>
    )


}

export default Hero