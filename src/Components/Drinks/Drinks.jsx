import React, { useRef } from 'react'
import Button from '../Button/Button'
import Drink from '../Drink/Drink'
import { ourDrinks as data } from './DrinksData'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import './Drinks.css'

const Drinks = () => {

  const itemRef = useRef(null)

  const scrollRight = () => {
    if (itemRef.current) {
      itemRef.current.scrollBy({
        top:0,
        left: 332,
        behavior: 'smooth'
      });
    }
  }
  const scrollLeft = () => {
    if (itemRef.current) {
      itemRef.current.scrollBy({
        top:0,
        left: -332,
        behavior: 'smooth'
      });
    }
  }

    return (
        <section name="Drinks" className="drinks-section">
            <div id="container" className="drinks">
                <div className="heading">
                    <h2>our drinks</h2>
                    <Button label="Place Order" txtColor="white" txtHoverColor="var(--primary-clr)" bgColor="var(--primary-clr)" border={true} hoverColor="white" borderRadius="50px" />
                </div>
                <div className="slideshow">
                  <span><FaAngleLeft onClick={scrollLeft} className="arrow-icon left" /></span>
                  <div className="slideshow-items" ref={itemRef}>
                  {
                    data.map((drink, index) => 
                          <Drink key={index} drinkLabel={drink.drinkLabel} drinkImg={drink.drinkImg} drinkImgAlt={drink.drinkImgAlt} />
                    )
                  }
                  </div>
                  <span><FaAngleRight onClick={scrollRight} className="arrow-icon right" /></span>
                </div>
            </div>
        </section>
    )
}

export default Drinks
