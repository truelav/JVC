import React from 'react';

import './footer.css'
import logo from '../../assets/images/icons/header-logo.png';

export const Footer = () => {
  const x = 1;

  return <section className="footerSection">
    <div className="footerContainer">
      <div className="footerInnerContainer">
          <div className="logo">
            <img src={logo} alt="Todoist" className="headerLogo" />
            <h3 className="footerHeader">Dazzling Image Quality.</h3>
          </div>
      </div>
      <div className="footerInnerContainer">

      </div>
      <div className="footerInnerContainer">
        <ul className="footerList">
          <li className="footerListA">
            Categories
          </li>
          <li className="footerListB">
            Photo Papers
          </li>
          <li className="footerListB">
            Wireless Printers
          </li>
          <li className="footerListB">
            Instant Print Cameras
          </li>
        </ul>
      </div>
      <div className="footerInnerContainer">
        <ul className="footerList">
          <li className="footerListA">
            Menu
          </li>
          <li className="footerListB">Home</li>
          <li className="footerListB">Products</li>
          <li className="footerListB">Contact</li>
        </ul>
      </div>
    </div>
    <div className="footerCopyrightContainer">
      <p>JVCKENWOOD Corporation has granted a license to SHENZHEN MTC CO., LTD. to utilize its "JVC" trademark to sell "JVC" brand TV products in the United States of America. SHENZHEN MTC CO., LTD. designated ESI Enterprises, Inc. as its Permitted Distributor and Permitted Service Provider for sales, servicing and support of such products in the United States of America. Therefore all matters concerning such TV products are the sole responsibility of SHENZHEN MTC CO., LTD. through ESI Enterprises, Inc in the United States of America, and NOT the responsibility of JVCKENWOOD Corporation and any of its group companies, including its subsidiaries in the United States of America.</p>
    </div>
  </section>
}
