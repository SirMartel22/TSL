import React,{ useState, useEffect, useRef } from 'react'
import './Package.css'


const Package = () => {

    return(

        <div className = "package-container">
            
            {/* header text code */}
            <div className = 'package-header-text'>
                <h1>Our Surprise Package</h1>
                <p>Discover our range of expertly crafted surprise
                    packages designed to make every occassion extraordinary
                </p>
            </div>

            {/* the grid card code */}

            <div className = "package-grid">

                <div className = 'grid-card one'>
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


                
                <div className = 'grid-card two'>
                    icon
                    <p>
                        Romantic surprise setup for couples celebrating
                        their love with custom gifts, romantic experiences, and 
                        unforgetable moments
                    </p>
                    <button className= 'grid-btn'> Book Now</button>
                </div>


                <div className = 'grid-card three'>
                    icon
                    <p>
                        Curated Gift boxes for any celeration, filled with premium surprises
                        tailored to the occassion and recipient's preferences.
                    </p>
                    <button className= 'grid-btn'> Book Now</button>
                </div>


                <div className = 'grid-card four'>
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