import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import FirstSection from './components/FirstSection/Firstsection'
import Dialog from './components/Dialog/Dialog';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import DialogDemo from './components/PrimeReact/PrimeReact';
function App() {
  const onMouseLeave=(id)=>{
    document.getElementById(id).style.display="none";

  }
  return (
    <div className="App">
    <Router>
    <Navbar/>
       <FirstSection/>
       <Dialog  onMouseLeave={onMouseLeave} dialogStyle="primary" >
       Component
       </Dialog>
    </Router>
  
     
    </div>

    
  );
}

export default App;
