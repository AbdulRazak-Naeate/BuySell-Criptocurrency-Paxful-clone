import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import FirstSection from './components/FirstSection/Firstsection'
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
       <FirstSection/>
    </Router>

     
    </div>
  );
}

export default App;
