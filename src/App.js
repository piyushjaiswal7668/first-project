import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Load theme settings from localStorage, or use default values
  const [navTheme, setNavTheme] = useState(localStorage.getItem('navTheme') || '#e9ecef');
  const [bodyTheme, setBodyTheme] = useState(localStorage.getItem('bodyTheme') || '#ffffff');
  const [fontColor, setFontColor] = useState(localStorage.getItem('fontColor') || '#000000');
  const [alert, setAlert] = useState(null);

  // Apply the themes to the document
  useEffect(() => {
    document.body.style.backgroundColor = bodyTheme;
    document.body.style.color = fontColor;
    document.documentElement.style.setProperty('--navbar-bg-color', navTheme);
  }, [navTheme, bodyTheme, fontColor]);

  // Save theme settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('navTheme', navTheme);
    localStorage.setItem('bodyTheme', bodyTheme);
    localStorage.setItem('fontColor', fontColor);
  }, [navTheme, bodyTheme, fontColor]);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleBodyTheme = (event) => {
    setBodyTheme(event.target.value);
    showAlert('Body color is changed','success');
  };

  const handleNavMode = (event) => {
    setNavTheme(event.target.value);
    showAlert('Nav background color is changed','success');

  };

  const handleFontColor = (event) => {
    setFontColor(event.target.value);
    showAlert('Font color is changed','success');

  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          navTheme={navTheme}
          bodyTheme={bodyTheme}
          fontColor={fontColor}
          handleBodyTheme={handleBodyTheme}
          handleFontColor={handleFontColor}
          handleNavMode={handleNavMode}
        />

        <div className="container my-3" style={{ backgroundColor: bodyTheme, color: fontColor }}>
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/" element={<TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              bodyTheme={bodyTheme}
              fontColor={fontColor}
            />} />
            <Route exact path="/about" element={<About
              bodyTheme={bodyTheme}
              fontColor={fontColor}
            />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
