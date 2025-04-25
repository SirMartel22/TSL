import React from 'react'
import { Headset, Box, Clock3, SmilePlus } from 'lucide-react'

const Works = () => {

    return(

        <div className="pt-8 pb-8 px-8 mt-16 lg:mt-16 lg:px-20 lg:mb-16 lg:pt-8" id='works'>

               {/* Header of the services section */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-4xl sm:text-4xl lg:text-5xl tracking-wide py-5">
                How It <span className="bg-gradient-to-r from-[#ff5e62] to-[#a855f7] bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-neutral-500 md:text-base mt-4 max-w-2xl mx-auto  text-[14px] lg:text-[16px] md:text-[14px] ">
            Creating the perfect surprise is easier than you think. 
            Our four-step process ensures a seamless experience from conception to delivery.
            </p>
        </div>

            <div className="text-image-wrapper relative space-y-24">

                {/* first */}
                <div className="first-work flex flex-col md:flex-row lg:flex-row lg:items-center justify-center md:space-x-12 lg:space-x-20">
                    <div className="image w-full  lg:h-full lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745570820/Customized_gz2k2g.jpg"/>
                    </div>

                    <div className="text-card bg-[#1a1a2e] px-8 w-full md:w-1/3 rounded-md shadow-glow py-10 text-right">
                        <div className="num-icon flex space-x-[50%] justify-end items-center">
                            <h2 className="1 bg-pink px-2 py-2 h-12 w-12 text-center text-2xl rounded-full">1</h2>
                            <Headset size={48} color="pink" />
                        </div>

                        <h3 className="title text-2xl my-2 ">Consult and Plan </h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px] lg:w-auto">Tell us about the occasion, the recipient, and your budget. Our surprise experts will help craft the perfect experience.</p>
                    </div>
                </div>

            {/* second */}
                <div className="second-work flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center md:space-x-12 lg:space-x-20">
                   
                    <div className="text-card bg-[#1a1a2e] px-8 w-full md:w-1/3 rounded-md shadow-glow py-10 ">
                        <div className="num-icon flex space-x-[50%] justify-start items-center">
                            <h2 className="2 bg-pink px-2 py-2 h-12 w-12 text-center text-2xl rounded-full">2</h2>
                            <Box size={48} color="pink" />
                        </div>

                        <h3 className="title text-2xl my-2">Customized Package </h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px] lg:w-auto">We curate a personalized surprise package tailored to your specifications with premium gifts and unique experiences.</p>
                    </div>

                    <div className="image w-full lg:h-full lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745571446/customized1_lp1lto.jpg"/>
                    </div>

                </div>


            {/* third */}

                <div className="third-work  flex flex-col md:flex-row lg:flex-row items-center justify-center md:space-x-12 lg:space-x-20">
                    <div className="image w-full lg:h-full lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745575091/schedule_namody.jpg"/>
                        
                    </div>

                    <div className="text-card bg-[#1a1a2e] px-8 w-full md:w-1/3 rounded-md shadow-glow py-10 text-right">
                        <div className="num-icon flex space-x-[50%] justify-end items-center">
                            <h2 className="3 bg-pink px-2 py-2 h-12 w-12 text-center text-2xl rounded-full">3</h2>
                            <Clock3 size={48} color="pink" />
                            
                        </div>
                        <h3 className="title text-2xl my-2">Schedule Delivery</h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px] lg:w-auto">Choose the perfect moment for the surprise, and we’ll coordinate the delivery seamlessly for maximum impact..</p>
                    </div>
                </div>


            {/* fourth */}

                <div className="fourth-work flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center md:space-x-12 lg:space-x-20">
                    
                    <div className="text-card bg-[#1a1a2e] px-8 w-full md:w-1/3 rounded-md shadow-glow py-10">
                        <div className="num-icon flex space-x-[50%] justify-start items-center ">
                            <h2 className="4 bg-pink px-2 py-2 h-12 w-12 text-center text-2xl rounded-full">4</h2>
                            <SmilePlus size={48} color="pink" />
                        </div>
                        
                        <h3 className="title text-2xl my-2">Create Memories </h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px] lg:w-auto">Watch as your thoughtfully planned surprise unfolds, creating joy and unforgettable memories that last a lifetime.</p>
                    </div>
                    
                    <div className="image w-full lg:h-full lg:w-[400px] md:h-[200px] md:w-[400px] ">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745570861/memories_3_p3vdes.jpg"/>
                    </div>

                   
                </div>

                <div className="divider hidden lg:block lg:absolute lg:top-[-150px] w-[1px] ml-[50%] h-[110%] border border-pink">

                </div>
            </div>

           
      

        </div>
    )

}


export default Works