import React from 'react';
import './Darkgreenpart.css';

import bg from '../assets/Vector (33).png';
import cardBg from '../assets/Vector (34).png';
import amazon from '../assets/Vector (35).png';
import scrollDash from '../assets/Vector (36).png';
import darkscroll from "../assets/Vector (37).png"
import Firstcry from "../assets/Firstcry.png"
import Hamleys from "../assets/Hamleys.png"
import purplegreen from "../assets/purplegreen.png"
const Darkgreenpart = () => {
    return (
      <>
        <img
  src={purplegreen}
  alt="top wave"
  className="purplegreen-img"
  style={{ width: '100%', display: 'block', marginTop: '-20px' }}
/>

        <div className="darkgreenpart-container" style={{ backgroundImage: `url("${bg}")` }}>
            <div className="darkgreenpart-heading">
                <h2>LOREM IPSUM DOLOR SIT</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. In arcu amet tincidunt lectus nisl convallis.
                    Egestas luctus consectetur amet sed. Morbi amet ut ipsum aenean ut nunc malesuada elementum.
                </p>
                <div className="yellow-line" />
            </div>

            <div className="brand-showcase" style={{ backgroundImage: `url("${cardBg}")` }}>
                <img src={amazon} alt="amazon" className="brand-logo" />
                <div className="divider" />
                <img src={Firstcry} alt="firstcry" className="brand-logo" />
                <div className="divider" />
                <img src={Hamleys} alt="hamleys" className="brand-logo" />
            </div>

            <div className="scroll-dash">
                <img src={scrollDash} alt="scroll dash" />
                 <img src={darkscroll} alt="scroll dash" />
                   <img src={darkscroll} alt="scroll dash" />
            </div>
        </div>
      </>
    );
};

export default Darkgreenpart;
