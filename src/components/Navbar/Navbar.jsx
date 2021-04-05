import {React,useState}from 'react'
import { Button, IconButton,Icon} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/themes/dark/index.less';
import Dialog from '../../components/Dialog/Dialog';

import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../buysellcrypto.png';
import './custom-theme.less';

import btcIcon from '../../bitcoin_icon.png'
import piIcon from '../../pi-icon.png'
import tetherIcon from '../../tether-icon.jpg'
import ethereumIcon from '../../ethereum-icon-purple.png'
import userImage from '../../logo.svg'



const Navbar = () => {


const [showbuydialog, setShowbuydialog] = useState(true);
const [showselldialog, setShowselldialog] = useState(true);

   const showSellDialog =() => {
    
    setShowselldialog(!showselldialog);
}

const showBuyDialog =() => {
    
    setShowbuydialog(!showbuydialog);
}
    return (
        <>
            <nav className="navbar">

            <Dialog dialogStyle="primary" id="buytoken-dialog" display={showbuydialog}>
       <div className="dialog-container">
            <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={btcIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Bitcoin</p> 
                  <p className="token-buy-label">Search for Offers to buy Bitcoin</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={ethereumIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Ethereum</p> 
                  <p className="token-buy-label">Search for Offers to buy Ethereum</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={tetherIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Tether</p> 
                  <p className="token-buy-label">Search for Offers to buy Tether</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={piIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Pi</p> 
                  <p className="token-buy-label">Search for Offers to buy Pi</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right" /></div>
              </div>
              </div>
       </Dialog>
         
       <Dialog dialogStyle="primary" id="selltoken-dialog" display={showselldialog}>
       <div className="dialog-container">
            <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={btcIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Bitcoin</p> 
                  <p className="token-buy-label">Search for Offers to Sell Bitcoin</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={ethereumIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Ethereum</p> 
                  <p className="token-buy-label">Search for Offers to Sell Ethereum</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={tetherIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Tether</p> 
                  <p className="token-buy-label">Search for Offers to Sell Tether</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="token-item-image" alt="token-item-img" src={piIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Pi</p> 
                  <p className="token-buy-label">Search for Offers to Sell Pi</p>
              </div>
              <div className="chevron-btn--buysell" ><Icon className="chevron-btn--buysell-icon" icon="chevron-right" /></div>
              </div>
              </div>
       </Dialog>
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" >
                      <img src={logo} alt='logo' style={{width:'100%',height:'70%'}}/>
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                     <IconButton component={Link} to="/sell"  color="blue" 
         icon={<Icon icon={showbuydialog?'chevron-up':'chevron-down'} onMouseOver={()=>showBuyDialog()}  color="white"/>} placement="right">
                          
                        Buy
                       </IconButton>
                       </li>
                       <li>
                        <IconButton icon={<Icon icon={showselldialog?'chevron-up':'chevron-down'} />}  onMouseOver={() =>showSellDialog()} appearance="default" placement="right">
                        Sell
                       </IconButton>
                     
                       
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/offers" className="nav-links">Create an Offer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/wallet" className="nav-links">Wallet</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/vendor" className="nav-links">Become a  Vendor</Link>
                        </li>

                    </ul>
                   <div className="user-wrapper">
                   <div className="nav--user" >
                        <p className="username">AbdulRazak</p>
                        <p className="balance">1000 USD</p>

                    </div>
                    <img className="user--image" src={userImage} alt="userImage" />
                    <i className="fas fa-chevron-down arrowdown"></i>
                   </div>
                  <Button className="btn-get-started"> Get Started</Button>

                   <div className="signin-signup">
                    <Button className='btn-login' appearance='link'>Log In</Button>
                    <Button className='btn-signup'>Create an Account</Button>
                    <div className="icon--container">
                            <i className="far fa-bell"></i></div>
                   </div>
                   

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
