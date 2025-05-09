import React,{ useEffect, useRef } from 'react'
import { Gift, Heart, Cake, PackageOpen, MoveRight } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Package = () => {

    const packageTitleRef = useRef(null);
    const packageTextRef = useRef(null)
    const package1 = useRef(null)
    const package2 = useRef(null)
    const package3 = useRef(null)
    const package4 = useRef(null)

    // const
    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power2.inOut',
            },
        });
    
        const titleElements = [
            packageTitleRef.current,
            packageTextRef.current,
            package1.current,
            package2.current,
            package3.current,
            package4.current,
        ];
    
    
        // Animate the elements with ScrollTrigger
        titleElements.forEach((el, index) => {
            timeline.fromTo(
                el,
                {
                    y: 50,
                    opacity: 0.2,
                },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%', // Trigger when the element is 80% down the viewport
                        toggleAction: 'play none none none',
                    },
                },
                `-=${index * 0.2}` // Overlap animations slightly
            );
        });
    
        // Recalculate ScrollTrigger
        ScrollTrigger.refresh();
    }, []);
    
    return(

        <div className = " pb-8 px-8  mt-16 lg:mt-16 lg:px-20 lg:mb-16" id="packages">
           
            <div className = 'package-header-text my-50'>
                <h1 ref={ packageTitleRef } className="text-white font-bold text-4xl sm:text-4xl lg:text-5xl text-center tracking-wide py-5">
                    Our Surprise <span className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] bg-clip-text text-transparent">Packages</span>
                    </h1>
                <p ref={packageTextRef} className="text-neutral-500 my-2 mb-8 md:my-5  md:text-base max-w-2xl text-center mx-auto text-[14px] lg:text-[16px] md:text-[15px]">Discover our range of expertly crafted surprise
                    packages designed to make every occassion extraordinary
                </p>
            </div>

            {/* the grid card code */}
 
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-10 lg:px-12 ">

                <div ref= {package1} className = 'h-full w-full md:h-200 md:w-200 rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none '>
                    
                    <div className = "flex justify-between py-1 pb-6"> 
                        <Gift size={48} color="pink" />
                        <p className ="bg-gradient-to-r from-[#FC466B] to-[#A855F7] rounded-md py-1 px-4">Popular</p>

                    </div>
                    <p className="pb-5 text-neutral-500">
                        Customised birthday packaged featuring personalised
                        gifts, decorations, and experiences to make their special
                        day truly memorable
                    </p>
                    <ScrollLink to="contacts" smooth={true} duration={1500} offset={-70}>
                        <button className= 'flex gap-2 text-pink'> Book Now
                            <MoveRight color="pink" />
                        </button>
                    </ScrollLink>
                   
                </div>

                <div ref= {package2} className = 'h-full w-full rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none'>
                    <Heart size={48} color="pink" />
                    <p  className="py-7 text-neutral-500">
                        Romantic surprise setup for couples celebrating
                        their love with custom gifts, romantic experiences, and 
                        unforgetable moments
                    </p>

                    <ScrollLink to="contacts" smooth={true} duration={1500} offset={-70}>
                        <button className= 'flex gap-2 text-pink'> Book Now
                            <MoveRight color="pink" />
                        </button>
                    </ScrollLink>
                </div>


                <div ref= {package3} className = 'h-full w-full rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none'>
                    <PackageOpen size={48} color="pink" />
                    <p  className="py-5 text-neutral-500">
                        Curated Gift boxes for any celeration, filled with premium surprises
                        tailored to the occassion and recipient's preferences.
                    </p>

                    <ScrollLink to="contacts" smooth={true} duration={1500} offset={-70}>
                        <button className= 'flex gap-2 text-pink'> Book Now
                            <MoveRight color="pink" />
                        </button>
                    </ScrollLink>

                </div>


                <div ref= {package4} className = 'h-full w-full rounded-md px-6 py-6 bg-black text-left border-pink border hover:bg-hover hover:border-none'>
                    <Cake size={48} color="pink" />
                    <p  className="py-7 text-neutral-500">
                        Curprise elements for corporate events, team celebrations, and milestones
                        to boost morale and create lasting memories
                    </p>

                    <ScrollLink to="contacts" smooth={true} duration={1500} offset={-70}>
                        <button className= 'flex gap-2 text-pink'> Book Now
                            <MoveRight color="pink" />
                        </button>
                    </ScrollLink>

                </div>

            </div>


        </div>
    )


}

export default Package