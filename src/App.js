// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import React, { useState } from 'react'
import Alert  from "./components/Alert";

// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('white'); //Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null)
 
  const showAlert = (message, type)=>{
    setAlert ({
      msg : message,
      type:  type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }


  const togglemode = ()=>{
    if(mode === 'white'){
      setMode('dark')
      document.body.style.backgroundColor= '#101010';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('white')
      document.body.style.backgroundColor= '#DCDCDC';
      showAlert("Light mode has been enabled", "success")
    }
  }

  // <>
  // <h1> This is me </h1>
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React with arham

  //     </a>
  //   </header>
  // </div>

  return (
    <>
    
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}

      {/* <Routes> // This way is incorrect
      <Navbar title="TextUtils" mode={mode} togglemode = {togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3"> 
        <TextFrom showAlert = {showAlert} heading="Enter the text to analyze below " mode={mode}/>
        <About/>
      </div>
      </Routes>
       */}
   
       {/* <Router>  */}
       <Navbar title="TextUtils" mode={mode} togglemode = {togglemode}/>
       <Alert alert={alert}/>
       <div className = "container">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About/>} /> */}
          {/* <Route path="/" element={ <TextFrom showAlert = {showAlert} heading="Enter the text to analyze below " mode={mode}/>}/> */}
        {/* </Routes> */}
        <TextFrom showAlert = {showAlert} heading="Enter the text to analyze below " mode={mode}/>
       </div>
       {/* </Router> */}
    </>
  );
}

export default App;
