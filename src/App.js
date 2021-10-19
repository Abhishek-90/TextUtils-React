import logo from './logo.svg';
import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About'

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [darkModeText, setDarkModeText] = useState('dark');

  const changeGreen = ()=>{
      if(darkMode !== 'green'){
        setDarkMode('green');
        document.body.style.backgroundColor = 'green';
      }
      else{
        document.body.style.backgroundColor = 'white';
        setDarkModeText('dark');
        setDarkMode('light');
      }

  }

  const toggleMode = ()=>{
    if(darkMode !== 'dark'){
      setDarkMode('dark')
      setDarkModeText('light')
      document.body.style.backgroundColor = 'black';
    }
    else{
      setDarkMode('light');
      setDarkModeText('dark');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <Router>
      <Navbar title="TestUtils" aboutText="About Us" mode={darkMode} modeText={darkModeText} darkMode = {toggleMode} greenMode = {changeGreen}/>
        <Switch>
          <Route exact path="/">
            <TextForm heading="Enter your Text to analyze" mode={darkMode} textMode={darkModeText}/>    
          </Route>
          <Route exact path="/about">
            <About/>    
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
