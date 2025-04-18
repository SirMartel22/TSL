import React,{ useState, useEffect, useRef } from 'react'
import './Package.css'


const Package = () => {

    return(

        <div className = "package-container px-30 py-20 bg-blue">
            
            {/* header text code */}
            <div className = 'package-header-text'>
                <h1>Our Surprise Package</h1>
                <p>Discover our range of expertly crafted surprise
                    packages designed to make every occassion extraordinary
                </p>
            </div>

            {/* the grid card code */}

            <div className = "flex justify-center space-x-6 ">

                <div className = 'h-150 w-150 rounded-mdpx-1 py-1 bg-black'>
                    <div className = "icon-btn"> 
                        icon
                        <p>Popular</p>

                    </div>
                    <p>
                        Customised birtday packaged featuring personalised
                        gifts, decorations, and experiences to make their special
                        day truly memorable
                    </p>
                    <button className= 'grid-btn'> Book Now</button>
                </div>


                
                <div className = 'h-150 w-150 rounded-md bg-black px-1 py-1 two'>
                    icon
                    <p>
                        Romantic surprise setup for couples celebrating
                        their love with custom gifts, romantic experiences, and 
                        unforgetable moments
                    </p>
                    <button className= 'grid-btn'> Book Now</button>
                </div>


                <div className = 'h-150 w-150 rounded-md bg-black px-1 py-1 three'>
                    icon
                    <p>
                        Curated Gift boxes for any celeration, filled with premium surprises
                        tailored to the occassion and recipient's preferences.
                    </p>
                    <button className= 'grid-btn'> Book Now</button>
                </div>


                <div className = 'h-150 w-150 rounded-md bg-black  px-1 py-1 four'>
                    icon
                    <p>
                        Curprise elements for corporate events, team celebrations, and milestones
                        to boost morale and create lasting memories
                    </p>
                    <button className= 'grid-btn'> Book Now</button>
                </div>




            </div>



        </div>
    )


}

export default Package