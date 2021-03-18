import React from 'react';
import './Button.css';
import {Link}from 'react-router-dom';
const STYLES=['btn--primary','btn--outline','btn--primary--blue','btn--select-token-outline','input--btn'];
const SIZES=['btn--medium','btn--small','btn-large','btn--default'];
export const Button=({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    icon,
    link
})=>{
    const checkButtonStyle= STYLES.includes(buttonStyle)? buttonStyle:STYLES[0];

    const checkButtonSize=SIZES.includes(buttonSize)? buttonSize:SIZES[0];
   const onerrorimgload =(id)=>{
       document.getElementById(id).style.display="none";
   }
    return (
        <Link to={`${link}`} className='btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
            type={type}
            >
            <img src={icon} alt="" onerror={onerrorimgload} className="btn--icon"/>{children}
            </button>
        </Link>
    )
}