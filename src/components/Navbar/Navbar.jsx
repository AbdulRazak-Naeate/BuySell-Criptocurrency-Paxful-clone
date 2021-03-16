import React from 'react'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../../logo.svg'






const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" >
                        BuySell Crypto <i className='fab fa-typo3'></i>
                    </Link>


                    <ul className="nav-menu">
                        <li className="nav-item">
                            
                        
                                <Button className="btns" buttonSize="btn--default"
                                buttonStyle="btn--primary--blue"
                                link="/buy">Buy <i className="fas fa-chevron-down btn-default-icon"></i></Button>
                        
                        </li><li className="nav-item">
                            <Link to="/sell" className="nav-links">Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/wallet" className="nav-links">Wallet</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/offers" className="nav-links">Create an Offer</Link>
                        </li>

                    </ul>
                    <div className="nav--user" >
                        <p className="username">AbdulRazak</p>
                        <p className="balance">1000 USD</p>

                    </div>
                    <img className="user--image" src={logo} alt="userImage" />
                    <i className="fas fa-chevron-down arrowdown"></i>
                    {<Button buttonStyle='btn--outline btn--medium'>SignUp</Button>}
                   
                    <Link to='/' className="navbar-logo">
                        {<div className="icon--container">
                            <i className="far fa-bell"></i></div>}
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar
