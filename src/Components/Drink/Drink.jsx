import React from 'react'
import './Drink.css'

const Drink = ({drinkLabel, drinkImg, drinkImgAlt}) => {
    return (
        <div className="drink-item">
            <div className="drink-img">
                <img src={drinkImg} alt={drinkImgAlt}/>
            </div>
            <h3>{drinkLabel}</h3>
        </div>
    )
}

export default Drink
