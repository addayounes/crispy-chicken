import React, { useEffect } from 'react'
import Button from '../Button/Button'
import Meal from '../Meal/Meal'
import { mealsOfTheDay as data } from './MealsData'
import './Meals.css'
import lazyLoading from '../../utils/LazyLoading'

const Meals = () => {
    useEffect(() => {
        lazyLoading(".meals", "lazyLoadingAnimation")
    }, [])
    return (
        <div name="Meals">
            <div id="container" className="meals">
                <div className="heading">
                    <h2>meals of the day</h2>
                        <Button label="Place Order" txtColor="var(--secondary-clr)" border={true} txtHoverColor="white" bgColor="white" hoverColor="var(--secondary-clr)" borderRadius="50px" />
                </div>
                <div className="split">
                    <Meal mealLabel={data[0].mealLabel} mealDesc={data[0].mealDesc} img={data[0].img} imgAlt={data[0].imgAlt} className="flex-col" />
                    <Meal mealLabel={data[1].mealLabel} mealDesc={data[1].mealDesc} img={data[1].img} imgAlt={data[1].imgAlt} className="flex-col" />
                    <Meal mealLabel={data[2].mealLabel} mealDesc={data[2].mealDesc} img={data[2].img} imgAlt={data[2].imgAlt} className="flex-col" />
                </div>
            </div>
            
        </div>
    )
}

export default Meals
