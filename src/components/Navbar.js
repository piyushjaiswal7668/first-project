import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

function Navbar({
  title = 'Set Title Here',
  aboutText = 'About Text here',
  navTheme,
  fontColor,
  bodyTheme,
  handleBodyTheme,
  handleFontColor,
  handleNavMode
}) {

  // Save colors to localStorage when they change
  useEffect(() => {
    localStorage.setItem('navTheme', navTheme);
    localStorage.setItem('fontColor', fontColor);
  }, [navTheme, fontColor]);

  // Apply saved colors from localStorage on component mount
  useEffect(() => {
    const savedNavTheme = localStorage.getItem('navTheme');
    const savedFontColor = localStorage.getItem('fontColor');
    
    if (savedNavTheme) {
      document.documentElement.style.setProperty('--nav-bg-color', savedNavTheme);
    }
    if (savedFontColor) {
      document.documentElement.style.setProperty('--font-color', savedFontColor);
    }
  }, []);
  useEffect(() => {
    // This sets the CSS variable in case it's used elsewhere
    document.documentElement.style.setProperty('--navbar-bg-color', navTheme);
  }, [navTheme]);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{aboutText}</Link>
              </li>
            </ul>
            <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Change Theme
            </button>
            <ul className="dropdown-menu">
              <li>
                <input
                  className="form-check-input"
                  type="color"
                  value={fontColor} 
                  onChange={(e) => {
                    handleFontColor(e);
                    localStorage.setItem('fontColor', e.target.value);
                  }}
                  id="fontColor"
                />
                <label className="form-check-label" htmlFor="fontColor">
                  Font Color
                </label>
              </li>
              <li>
                <input
                  className="form-check-input"
                  type="color"
                  value={navTheme}
                  onChange={(e) => {
                    handleNavMode(e);
                    localStorage.setItem('navTheme', e.target.value);
                  }}
                  id="navtheme"
                />
                <label className="form-check-label" htmlFor="navtheme">
                  NavBar Theme
                </label>
              </li>
              <li>
                <input
                  className="form-check-input"
                  type="color"
                  value={localStorage.getItem('bodyTheme') || bodyTheme}
                  onChange={(e) => {
                    handleBodyTheme(e);
                    localStorage.setItem('bodyTheme', e.target.value);
                  }}
                  id="bodyTheme"
                />
                <label className="form-check-label" htmlFor="bodyTheme">
                  Body Theme
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  navTheme: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  handleBodyTheme: PropTypes.func.isRequired,
  handleFontColor: PropTypes.func.isRequired,
  handleNavMode: PropTypes.func.isRequired,
};

export default Navbar;
