import React from 'react';
import './Blackpart.css';

import bg from '../assets/Vector (42).png';
import craftText from '../assets/Craft your tales!.png';
import productIcon from '../assets/Group (6).png';
import companyIcon from '../assets/Group (7).png';
import resourceIcon from '../assets/Group (8).png';
import socialIcon from '../assets/Group (9).png';
import extraIcon from '../assets/Group (10).png';
import blackcolud from "../assets/blackredcloud.png"
const Blackpart = () => {
  return (
<>
     <img src={blackcolud} alt="top wave" style={{ width: '100%', display: 'block', marginBottom: '-5px' }} />
   
    <section className="blackpart" style={{ backgroundImage: `url(${extraIcon}),url(${bg})` }}>
      <div className="center-text">
        <img src={craftText} alt="Craft your tales!" className="craft-text" />
      </div>

      <div className="footer">
        <div className="subscribe-section">
          <h3>Subscribe to the<br />io Tales Newsletter</h3>
          <p>Latest news, musings, announcements and<br />updates direct to your inbox.</p>
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>

        <div className="menu-icons">
          <div className="menu-block">
            <img src={productIcon} alt="Products" />
          </div>
          <div className="menu-block">
            <img src={companyIcon} alt="Company" />
          </div>
          <div className="menu-block">
            <img src={resourceIcon} alt="Resources" />
          </div>
          <div className="menu-block">
            <img src={socialIcon} alt="Social" />
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default Blackpart;
