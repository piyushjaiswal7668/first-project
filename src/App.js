import React, { useState ,useEffect} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [navTheme, setNavTheme] = useState('#e9ecef');
  const [bodyTheme, setBodyTheme] = useState('#ffffff');
  const [fontColor, setFontColor] = useState('#000000');
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    document.body.style.backgroundColor = bodyTheme;
    document.body.style.color = fontColor;
  }, [bodyTheme, fontColor]);

  useEffect(() => {
    document.documentElement.style.setProperty('--navbar-bg-color', navTheme);
  }, [navTheme]);
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
  };

  const handleNavMode = (event) => {
    setNavTheme(event.target.value);
  };

  const handleFontColor = (event) => {
    setFontColor(event.target.value);
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
          <Route exact path="/" element={ <TextForm
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
