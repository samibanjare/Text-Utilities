// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
        setAlert(null);
     },3000);
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const paletteMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
  }
  const toggleMode=(cls)=>{
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      removeBodyClasses();
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode is Enabled!!","success");
      document.title = 'Text-Utilities- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled!!","success");
      document.title = 'Text-Utilities- Light Mode';
    } 
  };
  
  return (
    <Router>
      <>
        <Navbar title="Text Utility!!" aboutTxt="about" mode={mode} toggleMode={toggleMode} paletteMode={paletteMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={ <TextForm showAlert={showAlert} heading= "Enter the text to Analyze" mode={mode}/>}/>
            <Route path="/about" element={<About mode={mode}/>}/>
          </Routes>
        </div>
      </>
      
    </Router>
  );
}

export default App;