import {React,useState,useEffect}from 'react'
import { Button, IconButton,Icon,ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/themes/dark/index.less';
import {Dialog} from 'primereact/dialog'

import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../logo.svg';
import './custom-theme.less';

import btcIcon from '../../bitcoin_icon.png'
import piIcon from '../../pi-icon.png'
import tetherIcon from '../../tether-icon.jpg'
import ethereumIcon from '../../ethereum-icon-purple.png'

import TokenItems from './TokenItems';





const Navbar = () => {

    const [tokenList,setTokenList]=useState([]);

    
        useEffect(() =>{

          const getData =()=>{
            const data=[{id:1,icon:btcIcon,title:'Bitcoin',label:'Search for Offers to buy Bitcoin'},
            {id:2,icon:tetherIcon,title:'Tether',label:'Search for Offers to buy Tether'},
            {id:3,icon:ethereumIcon,title:'Ehtereum',label:'Search for Offers to buy Ehtereum'},
            {id:4,icon:piIcon,title:'Pi',label:'Search for Offers to buy Pi'},

          ];
          setTokenList(data);
         //console.log(data[1].title)

          }
               getData(); 
        },[]);

       

 const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
       //setPosition(position);
    }
}




    const [displayBasic, setDisplayBasic] = useState(false);
   // const [displayBasic2, setDisplayBasic2] = useState(false);
   // const [displayModal, setDisplayModal] = useState(false);
    //const [displayMaximizable, setDisplayMaximizable] = useState(false);
  //  const [displayPosition, setDisplayPosition] = useState(false);
   // const [displayResponsive, setDisplayResponsive] = useState(false);
   //const [position,setPosition]=useState('center');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
      //  'displayBasic2': setDisplayBasic2,
      //  'displayModal': setDisplayModal,
      //  'displayMaximizable': setDisplayMaximizable,
      //  'displayPosition': setDisplayPosition,
      //  'displayResponsive': setDisplayResponsive
    }
    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" >
                        BuySell Crypto 
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                       
                    
            <IconButton component={Link} to="/sell"  color="blue" icon={<Icon icon={displayBasic?'chevron-up':'chevron-down'} onMouseEnter={() => onClick('displayBasic')}   color="white"/>} placement="right">
                          
                        Buy
                       </IconButton>
                       </li>
                       <li>
                        <IconButton icon={<Icon icon="chevron-down" />} appearance="default" placement="right">
                        Sell
                       </IconButton>
                     
                       
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
          
            <Dialog className="showbuysell-tokens-dialog" visible={displayBasic} closable={false}  onMouseLeave={()=>onHide('displayBasic')} onHide={() => onHide('displayBasic')}  position={'top-left'} >
        <div className="dialog-container">
            <div className="token-item"> 
              <img className="dialog-item-image" alt="token-item-img" src={btcIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Bitcoin</p> 
                  <p className="token-buy-label">Search for Offers to buy Bitcoin</p>
              </div>
              <div className="btn--buysell" ><Icon className="btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="dialog-item-image" alt="token-item-img" src={ethereumIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Ethereum</p> 
                  <p className="token-buy-label">Search for Offers to buy Ethereum</p>
              </div>
              <div className="btn--buysell" ><Icon className="btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="dialog-item-image" alt="token-item-img" src={tetherIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Tether</p> 
                  <p className="token-buy-label">Search for Offers to buy Tether</p>
              </div>
              <div className="btn--buysell" ><Icon className="btn--buysell-icon" icon="chevron-right"/></div>
              </div>

              <div className="token-item"> 
              <img className="dialog-item-image" alt="token-item-img" src={piIcon}/>
              <div className="item-info">
                  <p className="token-buy-title">Pi</p> 
                  <p className="token-buy-label">Search for Offers to buy Pi</p>
              </div>
              <div className="btn--buysell" ><Icon className="btn--buysell-icon" icon="chevron-right"/></div>
              </div>
        </div>
     </Dialog>

    
        </>
    )
}


 



export default Navbar
