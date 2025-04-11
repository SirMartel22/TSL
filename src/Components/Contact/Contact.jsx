import React,{ useState, useEffect, useRef } from 'react'
import './Contact.css'


const Contact = () => {

    const contact = [
        {
            icon: "src",
            title: 'Visit Our Studio',
            address1: '123 Surprise Avenue, Suite 101, Ilorin, Nigeria',
            address2: '123 Surprise Avenue, Suite 101, Ilorin, Nigeria',
        },

        {
            icon: "src",
            title: 'Email Us',
            address1: 'hello@thesurpriselounge.com',
            address2:  'support@thesurpriselounge.com',

        },

        {
            icon: "src",
            title: "Call Us",
            address1: '+234 903 854 4480',
            address2:  'Mon-Fri: 9am - 6pm',
        },

    ]

    return(

        <div className = "contact-container">
            
            <div className = 'contact-header-text'>
                <h1>What Out Clients Say</h1>
                <p>Don't just take our word for it. Here is what our clients have to say
                    about their experiences with The Surprise Lounge
                </p>
            </div>

            <div className= "getintouch-contact">

                <div className="getintouch">

                    {/* This secion of code for email and name flex */}
                    <div className="name-mail">
                        <div className="name">
                            <label for = 'name'>Your Name: </label>
                            <input type ='text' placeholder="Enter Your name"/>
                        </div>

                        <div className="mail">
                            <label for = 'name'> Email Address: </label>
                            <input type ='text' placeholder="Enter Your name"/>
                        </div>
                        
                    </div>

                    {/* this section for phone and occassion */}
                    <div className="phone-occasion">
                        <div className="phone">
                            <label for = 'phone'>Phone Number: </label>
                            <input type ='number' placeholder="Enter Your name"/>
                        </div>

                        <div className="occassion">
                            <label for = 'name'> Occassion: </label>
                            <select name="occassion">
                                <option value="Birthday">Birthday</option>
                                <option value="Surprise">Surprise</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Marriage">Marriage</option>

                            </select>
                        </div>
                        
                    </div>

                    {/* this section for message input */}
                    <div className="message">
                            <label for = 'message'> Your Message: </label>
                           <textarea placeholder="Enter your message"></textarea>
                        </div>
                    
                </div>

                {/* This section for contact */}
                <div className="contact-ready">

                    <div className="contact">
                        {contact.map((el) => {
                            return(
                                <div className ="contact-card">
                                    <div>
                                        <img src={el.icon}/>
                                    </div>
                                    <div className="contact-title">
                                        <h3>{el.title}</h3>
                                        <p>{el.address1}</p>
                                        <p>{el.address2}</p>


                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="ready">
                        <h1>
                            Ready for something special?
                        </h1>
                        <p>
                            Book a free consultation calll with our surprise
                            expert to discuss your ideas and requirements
                        </p>

                        <button className= 'schedule'> Schedule a call </button>
                    </div>

                </div>

            </div>


        </div>
    )


}

export default Contact