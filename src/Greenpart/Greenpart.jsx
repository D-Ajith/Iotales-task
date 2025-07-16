import React from 'react';
import './Greenpart.css';
import bggreen from "../assets/bggreen.png"
import textclip from '../assets/textclip.png';
import textcenter from "../assets/textcenter.png"
import scrollDash from '../assets/Vector (36).png';
import darkscroll from "../assets/Vector (44).png"
import GreenCloud1 from "../assets/Vector (45).png"
import GreenCloud2 from "../assets/Vector (46).png"
import GreenCloud3 from "../assets/Vector (47).png"
import rightsymbol from "../assets/Vector (50).png"
import leftsymbol from "../assets/Vector (51).png"
import Lefttopsymbol from "../assets/Vector (52).png"
import Leftimgsymbols from "../assets/Group 40063.png"
import Rightimgsymbols from "../assets/Group 40064.png"
const Greenpart = () => {
  return (
    <section className="green-part" style={{ backgroundImage: `url(${bggreen})` }}>
      <img src={textclip} alt="clip-shape" className="clip-shape" />

      <div className="green-content">
        <img src={Leftimgsymbols} alt="left-sym" className="left-img-symbol" />
        <img src={textcenter} alt="" />
        <img src={Rightimgsymbols} alt="right-sym" className="right-img-symbol" />

        <p>
          Lorem ipsum dolor sit amet consectetur. Eu tristique sed
          blandit aliquam neque odio. Tincidunt sit at facilisis est
          rhoncus sed convallis nec ipsum.
        </p>
        <button className="shop-btn">SHOP NOW</button>

        <div className="green-arrow green-left-arrow">←</div>
        <div className="green-arrow green-right-arrow">→</div>
        <div className="left-top-symbol">
          <img src={Lefttopsymbol} alt="top-left" />
        </div>
        <div className="edges">
          <img src={leftsymbol} alt="left-edge" className="left-edge-symbol" />
          <img src={rightsymbol} alt="right-edge" className="right-edge-symbol" />
        </div>
        <div className="scroll-dash">
          <img src={scrollDash} alt="scroll dash" />
          <img src={darkscroll} alt="scroll dash" />
          <img src={darkscroll} alt="scroll dash" />
        </div>
        <div>
          <div className="cloud-container">
            <div className="left-clouds">
              <img src={GreenCloud1} alt="cloud1" className="cloud-img" />
              <img src={GreenCloud2} alt="cloud2" className="cloud-img" />
            </div>
            <div className="right-cloud">
              <img src={GreenCloud3} alt="cloud3" className="cloud-img" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Greenpart;
