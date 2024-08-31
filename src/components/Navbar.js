import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
function Navbar({
  title = 'Set Title Here',
  aboutText = 'About Text here',
  navTheme,
  bodyTheme,
  fontColor,
  handleBodyTheme,
  handleFontColor,
  handleNavMode
}) {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom" style={{ backgroundColor: `${navTheme} !important`, color: fontColor }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{aboutText}</Link>
              </li>
            </ul>
            <button class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Change Theme
          </button>
            <ul className="dropdown-menu">
            <li> <input
                className="form-check-input"
                type="color"
                onChange={handleFontColor}
                id="fontColor"
              />
              <label className="form-check-label" htmlFor="fontColor">
                Font Color
              </label></li>
            <li> <input
                className="form-check-input"
                type="color"
                onChange={handleNavMode}
                id="navtheme"
              />
              <label className="form-check-label" htmlFor="navtheme">
                NavBar Theme
              </label></li>
            <li><input
                className="form-check-input"
                type="color"
                onChange={handleBodyTheme}
                id="bodyTheme"
              />
              <label className="form-check-label" htmlFor="bodyTheme">
                Body Theme
              </label></li>
           
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
  bodyTheme: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  handleBodyTheme: PropTypes.func.isRequired,
  handleFontColor: PropTypes.func.isRequired,
  handleNavMode: PropTypes.func.isRequired,
};

export default Navbar;
