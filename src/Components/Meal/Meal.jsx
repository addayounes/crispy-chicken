import React from 'react'
import Button from '../Button/Button'
import './Meal.css'


const Meal = ({mealLabel, mealDesc, img, imgAlt}) => {
    return (
        <div className="split-vertically">
            <div className="flex-col-vertically">
                <img src={img} alt={imgAlt} />
            </div>
            <div className="flex-col-vertically typo">
                <h3>{mealLabel}</h3>
                <p>{mealDesc}</p>
                <Button label="add to cart" txtColor="white" txtHoverColor="white" bgColor="var(--secondary-clr)" hoverColor="var(--secondary-darken-clr)" borderRadius="5px" />
            </div>
        </div>
    )
}

export default Meal
