import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const aboutTitleRef = useRef(null)
    const aboutTextRef = useRef(null)
    const aboutVideoRef = useRef(null)
    const ceoSectionRef = useRef(null)

    useEffect(() => {
        const elements = [aboutTitleRef.current, aboutTextRef.current, aboutVideoRef.current, ceoSectionRef.current];

        elements.forEach((el) => {
            gsap.fromTo(el, {
                opacity: 0.3,
            },
            {
                opacity: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: el,
                    delay: 0.2,
                    // start: '10%',
                    toggleAction: 'plan none none none'
                }
            })
        })
    })

    return(
        <div className="about pt-8 pb-2 px-8 lg:px-24 space-y-8" id='about'>

            <h1 ref={aboutTitleRef } className="text-white font-bold text-4xl sm:text-4xl lg:text-5xl text-center tracking-wide md:py-3">
                    About <span className="bg-gradient-to-r from-[#FF5E62] to-[#A855F7] bg-clip-text text-transparent">Us</span>
                    </h1>
                <div className="about-intro flex flex-col justify-center w-full md:flex-row space-x-24 text-pink ">

                    <div ref={aboutTextRef} className="about-introduction space-y-4 text-neutral-500 w-full lg:w-3/4 md:w-3/4" id="about-intro ">
                        <p className="about w-full">
                            At The Surprise Lounge, we specialize in creating unforgettable moments through unique and thoughtful surprise packages. 
                            Whether it's a birthday, wedding, anniversary, or any special occasion, we help you celebrate your loved ones in the most heartwarming way. 
                            Our goal is to make every moment count by turning ordinary days into extraordinary memories.
                        </p>

                        <p>
                            From personalized gifts to beautifully packaged surprises, we handle every detail with care and creativity. 
                            No matter the event, we’re here to add that extra spark of joy and excitement. 
                            At The Surprise Lounge, your happiness is our priority — we’re all about delivering smiles, one surprise at a time.
                        </p>

                    </div>
                </div>

                <div ref= {aboutVideoRef} className="intro-video flex items-center justify-center" id="intro-video">

                    <video autoPlay loop className=' rounded-md w-full lg:w3/4 md:w-3/4 border border-pink'>
                        <source src="https://res.cloudinary.com/djhfy0pr4/video/upload/v1745614143/aboutvideo_wpw2io.mp4" />
                        Your browser does not support the video tag
                    </video>

                </div>

                {/* The Ceo corner section */}
                <div ref={ceoSectionRef} className="ceo-section flex flex-col w-full md:flex-row items-center justify-center space-y-8 lg:space-x-24 md:space-x-24">
                    <div className="quote image lg:w-[500px] md:w-[400px] w-full ">
                        <p className="text-2xl mb-4 text-neutral-400 italic">"Why give a gift when you can give goosebumps? 
                            At The Surprise Lounge, we turn ordinary days into unforgettable moments. 
                            Birthdays, weddings, or just because—we bring the wow, the smiles, 
                            and the 'how did they know?' magic. Life’s better with surprises. 
                            Let’s make someone’s day unforgettable 🎉🎁" </p>

                            <h4 className="text-neutral-100">Oluwaferanmi</h4>
                            <h5 className="text-neutral-100 ">Founder - The Surprise Lounge</h5>
                    </div>
                    <div className="image h-[400px] w-[330px] rounded-md">
                        <img className="rounded-md h-full w-full border border-pink"  src="https://res.cloudinary.com/djhfy0pr4/image/upload/v1745618121/ceo_axmutm.jpg"/>
                    </div>


                </div>

        </div>
    )



}


export default About;