import React from 'react'
import Button from '../Button/Button'
import p1 from '../../Images/particles/1-16-16.svg'
import p2 from '../../Images/particles/bubbles-16-16.svg'
import './Contact.css'

const Contact = () => {
    return (
        <section name="Contact" className="contact-section">
            <div className="particles">
                <img className="particle plus" src={p1} alt="Plus"/>
                <img className="particle bubbles" src={p2} alt="Bubbles"/>
            </div>
            <div id="container" className="contact">
                <h1>Contact Us</h1>
                <form className="contact__form">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Your Message" cols='40' rows="10"></textarea>
                </form>
                <Button label="Send Message" txtColor="white" bgColor="var(--secondary-clr)" hoverColor="var(--secondary-darken-clr)" borderRadius="5px" />
            </div>
        </section>
    )
}

export default Contact
