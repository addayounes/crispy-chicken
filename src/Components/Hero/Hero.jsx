import React from 'react'
import Cook from '../../Images/cook.png'
import Button from '../Button/Button'
import Meals from '../Meals/Meals'
import Bg from '../../Images/particles/bg-17.svg'
import './Hero.css'

const Hero = () => {
    return (
        <div name="Home" className="hero">
            <section className="hero__landing-page">
                <div id="container" className="split">
                    <img className="bg" src={Bg} alt="BG"/>
                    <div className="flex-col">
                        <h1 className="hero__heading">The Good Taste<br />Of Food</h1>
                        <p className="hero__description">At Crispy Chicken, we believe in everything at its prime. Our focus is to bring the best and most responsibly sourced ingredients to the table.</p>
                        <Button label="Place Order" txtColor="white" txtHoverColor="white" bgColor="var(--primary-clr)" hoverColor="var(--primary-darken-clr)" borderRadius="5px" />
                    </div>
                    <div className="flex-col">
                        <img src={Cook} alt="Cook"/>
                    </div>
                </div>
            </section>
            <section className="hero__meals">
                <Meals />
            </section>
        </div>
    )
}

export default Hero
