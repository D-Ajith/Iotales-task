import React from 'react';
import './Blackpart.css';

import bg from '../assets/Vector (42).png';
import craftText from '../assets/Craft your tales!.png';
import blackcloud from "../assets/blackredcloud.png";
import extraIcon from '../assets/Group (10).png';

const Blackpart = () => {
  return (
    <>
      <img
        src={blackcloud}
        alt="top wave"
        style={{ width: '100%', display: 'block', marginTop: '-20px' }}
      />

      <section
        className="blackpart"
        style={{ backgroundImage: `url(${extraIcon}), url(${bg})` }}
      >
        <div className="center-text">
          <img src={craftText} alt="Craft your tales!" className="craft-text" />
        </div>

        <div className="footer">
          <div className="subscribe-section">
            <h3>Subscribe to the<br />io Tales Newsletter</h3>
            <p>
              Latest news, musings, announcements and
              <br />
              updates direct to your inbox.
            </p>
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>

          <div className="footer-links">
            <div className="link-block">
              <h4>Products</h4>
              <a href="#">Product 1</a>
              <a href="#">Product 2</a>
              <a href="#">Product 3</a>
              <a href="#">Product 4</a>
              <a href="#">Product 5</a>
            </div>
            <div className="link-block">
              <h4>Company</h4>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
              <a href="#">Menu 6</a>
              <a href="#">Menu 7</a>
              <a href="#">Menu 8</a>
            </div>
            <div className="link-block">
              <h4>Resources</h4>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
            <div className="link-block">
              <h4>Social</h4>
              <a href="#">Menu 1</a>
              <a href="#">Menu 2</a>
              <a href="#">Menu 3</a>
              <a href="#">Menu 4</a>
              <a href="#">Menu 5</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blackpart;
