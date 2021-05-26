import React, { useEffect } from 'react'
import Button from '../Button/Button'
import lazyLoading from "../../utils/LazyLoading"
import './About.css'


const About = () => {
    useEffect(() => {
        lazyLoading(".img-bg", "lazyLoadingAnimation")
        lazyLoading(".text-container", "lazyLoadingAnimation")
    }, [])
    return (
    <section className="split about" name="About">
            <div className="flex-col img-bg"></div>
            <div className="flex-col text-container">
                <h1>Who are we ?</h1>
                <p>Eating is an agricultural act and Crispy Chicken is part of a larger movement to make delicious food part of the climate solution. At the restaurant, we are creating a market for climate beneficial ingredients and our non-profits are working to make restaurants part of the climate solution.</p>
                <Button label="learn more" txtColor="var(--dark-clr)" txtHoverColor="white" bgColor="white" hoverColor="var(--dark-clr)" hoverTextColor="white" border={true} borderRadius="5px" />
            </div>
        </section>
    )
}

export default About
