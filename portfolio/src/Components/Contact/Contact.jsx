import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {themeContext} from "../../Context"
import { useContext } from 'react'

const Contact = () => {
    
    const form = useRef();

    const [done,setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s1uxfoj', 'template_8jfdcib', form.current, 'I5PANQCuYBmgetWxe')
        .then((result) => {
            console.log(result.text);
            console.log("Message sent");
            console.log('111');
            setDone(true)
        }, (error) => {
            console.log(error);
        });
    };

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div
                className='blur s-blur1'
                style={{background: "#ABF1FF94"}}
                ></div>
            </div>
        </div>
        <div className="c-right">
            {/* <form ref={form} onSubmit={sendEmail}> */}
            <form method="POST" action="https://getform.io/f/68b40e03-0e97-4331-8339-a89016ef8889" >
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type="submit" name='send' className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>

            </form>
        </div>
    </div>
  );
}

export default Contact;
