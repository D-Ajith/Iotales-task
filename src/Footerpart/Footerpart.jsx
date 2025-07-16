import React from 'react';
import './Footerpart.css';

import footerBg from '../assets/Vector (43).png';
import copyright from '../assets/© 2025 Brand Name. All Rights Reserved..png';
import paymentMethods from '../assets/Rectangle (1).png';

const Footerpart = () => {
  return (
    <footer className="footerpart" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-content">
        <img src={copyright} alt="© 2025 Brand Name" />
        <img src={paymentMethods} alt="Payment Methods" />
      </div>
    </footer>
  );
};

export default Footerpart;
