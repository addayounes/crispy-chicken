import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import logo from '../../Images/logo.png'
import { Link } from 'react-scroll'
import './NavBar.css'

const Navbar = () => {
    const [Nav, setNav] = useState(false)
    const [NavShadows, setNavShadows] = useState(false)
    const toggleNav = () => {
        setNav(!Nav)
    }
    const handleScroll = () => {
        if(window.scrollY>0){
            setNavShadows(true)
        }else if(window.scrollY===0) setNavShadows(false)
    }
    window.addEventListener('scroll', handleScroll)
    return (
        <header className={NavShadows ? 'box_shadow' : ''}>
            <div id="container" className="header">
                <div className="logo">
                    <Link to="Home" spy={true} smooth={true} offset={-72} duration={500}><img src={logo} alt="Logo"/></Link>
                </div>
                <nav className="navbar">
                    <ul id={Nav ? 'hidden' : '' } onClick={toggleNav}>
                        <BrowserRouter>
                            <li><Link to="Home" spy={true} smooth={true} offset={-72} duration={500}>Home</Link></li>
                            <li><Link to="Meals" smooth={true} offset={-72} duration={500}>Meals</Link></li>
                            <li><Link to="Drinks" spy={true} smooth={true} offset={-72} duration={500}>Drinks</Link></li>
                            <li><Link to="About" spy={true} smooth={true} offset={-72} duration={500}>About</Link></li>
                            <li><Link to="Contact" spy={true} smooth={true} offset={-72} duration={500}>Contact</Link></li>
                        </BrowserRouter>
                    </ul>
                    <span className="shopping-cart">
                        <FaShoppingCart />
                    </span>
                    {
                        Nav ? <IoClose onClick={toggleNav} className="icon close-icon" /> : <HiMenuAlt3 onClick={toggleNav} className="icon menu-icon" />
                    }
                </nav>
            </div>
        </header>
    )
}

export default Navbar
