import React from 'react'
import { Button, IconButton,Icon,ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../../logo.svg';
import './custom-theme.less';






const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" >
                        BuySell Crypto 
                    </Link>


                    <ul className="nav-menu">
                        <li className="nav-item">
                       
                        <ButtonToolbar>
                       <IconButton color="blue" icon={<Icon icon="chevron-down" color="white"/>} placement="right">
                        Buy
                       </IconButton>
                        <IconButton icon={<Icon icon="chevron-down" />} appearance="default" placement="right">
                        Sell
                       </IconButton>
                       </ButtonToolbar>
                       
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/sell" className="nav-links">Create an Offer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/wallet" className="nav-links">Wallet</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/offers" className="nav-links">Become a  Vendor</Link>
                        </li>

                    </ul>
                    <div className="nav--user" >
                        <p className="username">AbdulRazak</p>
                        <p className="balance">1000 USD</p>

                    </div>
                    <img className="user--image" src={logo} alt="userImage" />
                    <i className="fas fa-chevron-down arrowdown"></i>
                   
                    <ButtonToolbar style={{ background: '', padding: 0 ,color:'gray'}}>
                    <Button color="gray" appearance="ghost"> Get Started</Button></ButtonToolbar>
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
