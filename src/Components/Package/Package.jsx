import React,{ useState, useEffect, useRef } from 'react'
import { Gift, Heart, Cake, PackageOpen, MoveRight } from 'lucide-react'


const Package = () => {

    return(

        <div className = "pt-24 pb-20 px-20 mt-16 lg:px-24">
           
            <div className = 'package-header-text my-50'>
                <h1 className="text-white font-bold text-4xl sm:text-4xl lg:text-5xl text-center tracking-wide py-5">
                    Our Surprise <span className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] bg-clip-text text-transparent">Packages</span>
                    </h1>
                <p className="text-neutral-500 my-5 md:text-base max-w-2xl text-center mx-auto">Discover our range of expertly crafted surprise
                    packages designed to make every occassion extraordinary
                </p>
            </div>

            {/* the grid card code */}
 
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-10 lg:px-20 ">

                <div className = 'h-150 w-150 rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none '>
                    
                    <div className = "flex justify-between py-1 pb-6"> 
                        <Gift color="pink" />
                        <p className ="bg-gradient-to-r from-[#FC466B] to-[#A855F7] rounded-md py-1 px-4">Popular</p>

                    </div>
                    <p className="pb-5 text-neutral-500">
                        Customised birtday packaged featuring personalised
                        gifts, decorations, and experiences to make their special
                        day truly memorable
                    </p>
                    <button className= 'flex gap-2 text-pink'> Book Now
                        <MoveRight color="pink" />
                    </button>
                </div>


                
                <div className = 'h-150 w-150 rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none'>
                    <Heart color="pink" />
                    <p  className="py-7 text-neutral-500">
                        Romantic surprise setup for couples celebrating
                        their love with custom gifts, romantic experiences, and 
                        unforgetable moments
                    </p>
                    <button className= 'flex gap-2 text-pink'> Book Now
                        <MoveRight color="pink" />
                    </button>
                </div>


                <div className = 'h-150 w-150 rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none '>
                    <PackageOpen color="pink" />
                    <p  className="py-5 text-neutral-500">
                        Curated Gift boxes for any celeration, filled with premium surprises
                        tailored to the occassion and recipient's preferences.
                    </p>
                    <button className= 'flex gap-2 text-pink'> Book Now
                        <MoveRight color="pink" />
                    </button>
                </div>


                <div className = 'h-150 w-150 rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none'>
                    <Cake color="pink" />
                    <p  className="py-7 text-neutral-500">
                        Curprise elements for corporate events, team celebrations, and milestones
                        to boost morale and create lasting memories
                    </p>
                    <button className= 'flex gap-2 text-pink'> Book Now
                        <MoveRight color="pink" />
                    </button>
                </div>

            </div>


        </div>
    )


}

export default Package