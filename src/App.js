//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  
} from "react-router-dom";

//let name = "Azher";
function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.background = '#042743';
      showAlert("Dark mode has been Enabled","success");
      document.title = 'TextUtils - Dark Mode';
      //  TO SET TIME INTERVAL

      // setInterval(() =>{
      //   document.title = 'TextUtils is Amazing'
      // },2000);

      // setInterval(() =>{
      //   document.title = 'Download TextUtils Now'
      // },1500);

    }

    else{
      setMode('light'); 
      document.body.style.background = 'white';
      showAlert("Light mode has been Enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
  <>
  

<Router>
      <Navbar title="TextUtils" mode={mode} onChangeMode={handleChangeMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
        </Routes>
      </div>
   </Router> 

    </>
  );
}

export default App;
