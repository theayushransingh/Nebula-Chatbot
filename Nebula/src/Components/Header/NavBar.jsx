import React from 'react'
import "../Header/NavBar.css"
import Logo4 from "../Header/assets/Logo4.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='Logo'>
                <Link to='/'>
                <img src={Logo4} alt="" />
                </Link>
                
            </div>
            <div className='rightSection'>
                <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/about'>
                <li>About</li>
                </Link>
                <Link to='/contact'>
                <li>Contact</li>
                </Link>    
                </ul>
            </div>
            <div className='Navbuttons'>
                <Link to='/login'>
                <button id='btn2'>Log in</button>
                </Link> 
                <Link to='/signup'>
                <button id='btn1'>Sign up</button>
                </Link> 
                
                
            </div>
        </div>
    )
}

export default NavBar
