import React,{ useState, useEffect, useRef } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'


const Contact = () => {

      
    const contact = [
        {
            icon: MapPin,
            title: 'Visit Our Studio',
            address1: '123 Surprise Avenue, Suite 101, Ilorin, Nigeria',
            address2: '123 Surprise Avenue, Suite 101, Ilorin, Nigeria',
        },

        {
            icon: Mail,
            title: 'Email Us',
            address1: 'hello@thesurpriselounge.com',
            address2:  'support@thesurpriselounge.com',

        },

        {
            icon: Phone,
            title: "Call Us",
            address1: '+234 903 854 4480',
            address2:  'Mon-Fri: 9am - 6pm',
        },

    ]

    // deploymentid = AKfycbwKzpmd1uc2eZBVK17qrfvKMb9Sra4Frw1bxKmAxlqUJoknfP-TFTgWz6cCjY2New5d

    //url = https://script.google.com/macros/s/AKfycbwKzpmd1uc2eZBVK17qrfvKMb9Sra4Frw1bxKmAxlqUJoknfP-TFTgWz6cCjY2New5d/exec

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "https://script.google.com/macros/s/AKfycbyDcjLs4hg0O0wnmfxwyU7MeyCPQQsQnxoVMnDHnE5evC8fvk0YCp5DTvmZwqSX9UZx/exec" 
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            mode: 'no-cors',
            body: (`Name=${e.target.name.value}
                &Email=${e.target.email.value}
                &Phone=${e.target.phone.value}
                &Occassion=${e.target.occassion.value}
                &Message=${e.target.message.value}`)
        }).then(res=>res.text()).then(data=>{
            alert(data)
        }).catch(error=>console.log(error))
    }

    return(

        <div className = "w-full flex flex-col justify-center items-center space-y-12 py-40 lg:px-24">
            
            <div className = 'contact-header-text text-center'>
                <h1 className="text-white font-bold tracking-wide md:text-4x lg:text-5xl py-3">
                    Book Your 
                    <span className= "bg-gradient-to-r from-[#ff5e62] to-[#a855f7] text-transparent bg-clip-text"> Surprise</span>
                </h1>
                <p className="text-neutral-500 text-[12px] lg:text-[16px] md:text-[14px] max-w-2xl">Ready to create and unforgettable moment? Get in touch with out team to start
                    planning your perfect surprise
                </p>
            </div>

            <div className= "grid grid-cols-1 lg:grid-cols-2 justify-center items-center space-x-8">

                <div className="bg-[#1A1A1D] py-20 px-8 flex flex-col space-y-12 shadow-glow rounded-md w-1/2 md:w-full">

                    <div>
                        <h1 className=" text-4xl">Get In Touch </h1>
                    </div>
                    
                    <form action='/submit' onSubmit={handleSubmit} method="POST">

              
                    {/* This secion of code for email and name flex */}
                    <div className="name-mail flex space-x-6">

                        <div className="name ">
                            <label for = 'name' className="py-4">Your Name: </label>
                            <input type ='text' name="name" placeholder="Enter Your name" className="w-full border border-neutral-900 shadow-glow focus:outline-none focus:border-pink rounded-md shadow-sm py-3 px-2 focus:ring-1 focus:ring-pink mt-2 text-neutral-700  text-[12px] lg:text-[14px] md:text-[14px] " />
                        </div>

                        <div className="mail">
                            <label for = 'name' className="py-24"> Email Address: </label>
                            <input type ='text' name="email" placeholder="Enter Your name" className="w-full border border-neutral-900 shadow-glow focus:outline-none focus:border-pink rounded-md shadow-sm py-3 px-2 focus:ring-1 focus:ring-pink mt-2 text-neutral-700  text-[12px] lg:text-[14px] md:text-[14px]"/>
                        </div>
                        
                    </div>

                    {/* this section for phone and occassion */}
                    <div className="phone-occasion flex  space-x-6">
                        <div className="phone ">
                            <label for = 'phone'>Phone Number: </label>
                            <input type ='number' name='phone' placeholder="Enter Your Mobile Number" className="w-full border border-neutral-900 shadow-glow focus:outline-none focus:border-pink rounded-md shadow-sm py-3 px-2 focus:ring-1 focus:ring-pink mt-2 text-neutral-700 text-[12px] lg:text-[14px] md:text-[14px]"/>
                        </div>

                        <div className="occassion">
                            <label for = 'name'> Occassion: </label>
                            <select name="occassion" className="w-full border border-neutral-900 shadow-glow focus:outline-none focus:border-pink rounded-md shadow-sm py-4 px-2 focus:ring-1 focus:ring-pink mt-2 text-neutral-700 text-[12px] lg:text-[14px] md:text-[14px] ">
                                <option value="Birthday">Birthday</option>
                                <option value="Surprise">Surprise</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Marriage">Marriage</option>

                            </select>
                        </div>
                        
                    </div>

                    {/* this section for message input */}
                    <div className="message flex flex-col space-y-2">
                        <label  for = 'message'> Your Message: </label>
                        <textarea name='message' placeholder="Enter your message" className="w-full border border-neutral-900 shadow-glow focus:outline-none focus:border-pink rounded-md shadow-sm py-3 px-2 focus:ring-1 focus:ring-pink text-neutral-700 mt-2 "></textarea>
                    </div>
                    
                    <button type='submit' className="schedule bg-gradient-to-r from-pink2 to-purple2 py-3 px-4 hover:bg-opacity-60 rounded-md my-8">Schedule A Call</button>
                </form>


                </div>

                {/* This section for contact */}
                <div className="contact-ready flex flex-col space-y-12 w-full">

                    <div>
                        <h1 className="text-4xl"> Contact Information </h1>
                    </div>

                    <div className="contact flex flex-col space-y-8">
                        {contact.map((el, index) => {
                            const Icon = el.icon
                            return(
                                <div  className ="contact-card flex my-4">
                                    <div className="w-8 h-8">
                                        <Icon color="pink" size={24} />
                                    </div>
                                    <div className="contact-title ">
                                        <h3 className='font-bold mb-2'>{el.title}</h3>
                                        <p className="text-neutral-500 text-[12px] lg:text-[14px] md:text-[14px]">{el.address1}</p>
                                        <p className="text-neutral-500 text-[12px] lg:text-[14px] md:text-[14px] ">{el.address2}</p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="ready bg-[#1A1A1D] shadow-glow w-3/4 py-8 px-6 rounded-md">
                        <h1 className="mb-2 font-bold ">
                            Ready for something special?
                        </h1>
                        <p className="mb-2 text-neutral-500  text-[12px] lg:text-[16px] md:text-[14px]">
                            Book a free consultation call with our surprise
                            expert to discuss your ideas and requirements
                        </p>

                        <a href="" className="schedule text-neutral-400">Schedule A Call</a>

                
                    </div>

                </div>

            </div>


        </div>
    )


}

export default Contact