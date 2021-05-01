import React, { useState } from 'react'
import './Button.css'

const Button = ({label, txtColor, txtHoverColor, bgColor, hoverColor, border, borderRadius, dest}) => {
    const [style, setStyle] = useState(true)
    const handleHover = () => {
        setStyle(s => !s)
    }
    const currStyle = {
        color: style ? txtColor : txtHoverColor,
        backgroundColor: style ? bgColor : hoverColor,
        borderRadius: borderRadius,
        border: border ? `1px solid ${txtColor}` : 'none'
    }
    Button.defaultProps = {
        txtHoverColor: 'white'
    }
    
    return (
        <>
           <a
            className="btn"
            href={dest}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={currStyle}
            >{label}</a> 
        </>
    )
}

export default Button
