import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header.css'
import logo from '../../assets/images/icons/header-logo.png'

export const Header = () => {
  const x = 1;

  return <header className="header" data-testid="header">
    <section className="navigationSection">
      <div className="navigationContainer">
        <nav className="navigationNav">
          <div className="navigationLogoContainer">
            <img src={logo} alt="Todoist" className="headerLogo" />
          </div>
          <div >
            <ul className="navList">
              <NavLink to="/">
                <li className="navItem">
                  Home
                </li>
              </NavLink>
              <NavLink to="tvs"> 
                <li className="navItem">
                  TVs
                </li>
              </NavLink>
              <NavLink to="shop">
                <li className="navItem">
                  Shop
                </li>
              </NavLink>
              <NavLink to="support">
                <li className="navItem">
                  Support
                </li>
              </NavLink>
              <NavLink to="recycle">
                <li className="navItem">
                  Recycle
                </li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </header>
}
