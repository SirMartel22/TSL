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
            <p className="text-neutral-500 md:text-base mt-4 max-w-2xl mx-auto  text-[12px] lg:text-[14px] md:text-[14px] ">
            Creating the perfect surprise is easier than you think. 
            Our four-step process ensures a seamless experience from conception to delivery.
            </p>
        </div>

            <div className="text-image-wrapper relative space-y-24">

                {/* first */}
                <div className="first-work flex flex-col md:flex-row lg:flex-row lg:items-center justify-center md:space-x-12 lg:space-x-20">
                    <div className="image w-full  lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745570820/Customized_gz2k2g.jpg"/>
                    </div>

                    <div className="text-card bg-[#1a1a2e] pb-10 pt-10 px-8 w-full lg:text-right md:text-right rounded-md shadow-glow lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <div className="num-icon flex space-x-[50%] justify-end items-center">
                            <h2 className="1">1</h2>
                            <Headset color="pink" />
                        </div>

                        <h3 className="title text-2xl py-2">Consult and Plan </h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px]">Tell us about the occasion, the recipient, and your budget. Our surprise experts will help craft the perfect experience.</p>
                    </div>
                </div>

            {/* second */}
                <div className="second-work flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center md:space-x-12 lg:space-x-20">
                   
                    <div className="text-card bg-[#1a1a2e] pb-10 pt-10 px-8 w-full rounded-md shadow-glow lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px] ">
                        <div className="num-icon flex space-x-[50%] justify-start items-center">
                            <h2 className="2">2</h2>
                            <Box color="pink" />
                        </div>

                        <h3 className="title text-2xl">Customized Package </h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px]">We curate a personalized surprise package tailored to your specifications with premium gifts and unique experiences.</p>
                    </div>

                    <div className="image w-full  lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745571446/customized1_lp1lto.jpg"/>
                    </div>

                </div>


            {/* third */}

                <div className="third-work  flex flex-col md:flex-row lg:flex-row items-center justify-center md:space-x-12 lg:space-x-20">
                    <div className="image w-full lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745575091/schedule_namody.jpg"/>
                        
                    </div>

                    <div className="text-card bg-[#1a1a2e] pb-10 pt-10 px-8 w-full text-right rounded-md shadow-glow lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <div className="num-icon flex space-x-[50%] justify-end items-center">
                            <h2 className="3">3</h2>
                            <Clock3 color="pink" />
                            
                        </div>
                        <h3 className="title text-2xl">Schedule Delivery</h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px]">Choose the perfect moment for the surprise, and we’ll coordinate the delivery seamlessly for maximum impact..</p>
                    </div>
                </div>


            {/* fourth */}

                <div className="fourth-work flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center md:space-x-12 lg:space-x-20">
                    
                    <div className="text-card bg-[#1a1a2e] pb-10 pt-10 px-8 w-full rounded-md shadow-glow lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px]">
                        <div className="num-icon flex space-x-[50%] justify-start items-center">
                            <h2 className="4">4</h2>
                            <SmilePlus color="pink" />
                        </div>
                        
                        <h3 className="title text-2xl">Create Memories </h3>
                        <p className="text text-neutral-500 text-[12px] md:text-[14px] lg:text-[15px]">Watch as your thoughtfully planned surprise unfolds, creating joy and unforgettable memories that last a lifetime.</p>
                    </div>
                    
                    <div className="image w-full lg:h-[200px] lg:w-[400px] md:h-[200px] md:w-[400px] ">
                        <img className="w-full rounded-md border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745570861/memories_3_p3vdes.jpg"/>
                    </div>

                   
                </div>

                <div className="divider hidden lg:block lg:absolute lg:top-[-150px] w-[1px] ml-[50%] h-[115%] border border-pink">

                </div>
            </div>

           
      

        </div>
    )

}


export default Works