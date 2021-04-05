import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Wallet from './components/Pages/Wallet/Wallet';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import DialogDemo from './components/PrimeReact/PrimeReact';

function App() {
  
  return (
    <div className="App">
    
    <Router>
     <Navbar/>
     <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/wallet' component={Wallet}/>
    </Switch>
       
    </Router>
  
     
    </div>

    
  );
}

export default App;
