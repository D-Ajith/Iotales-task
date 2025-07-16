import React from 'react';
import './Pinkpart.css';
import bgpink from '../assets/Vector (5).png';
import heading from '../assets/Lorem ipsum dolor.png';
import product from '../assets/Rectangle.png';
import circle from '../assets/Vector (4).png';
import priceBg from '../assets/Vector (7).png';
import menuBg from '../assets/Vector (8).png';
import menuHoverBg from '../assets/Vector (6).png';

const Pinkpart = () => {
    return (
        <section className="pink-part">
            <img src={bgpink} alt="Background" className="bgpink" />

            <div className="top-content">
                <img src={heading} alt="Heading" className="heading" />
                <p className="subheading">
                    Lorem ipsum dolor sit amet consectetur. Eu tristique sed blandit aliquam neque odio tortor in sit. Facilisis est rhoncus sed commodo nec ipsum.
                </p>
            </div>

            <div className="menu-buttons">
                {["Menu 01", "Menu 02", "Menu 03", "Menu 04", "Menu 05"].map((text, i) => (
                    <button key={i} className="menu-btn">{text}</button>
                ))}
            </div>

            <div className="circle-wrapper">
                <img src={circle} alt="Circle" className="circle-bg" />

                {/* Inside circle */}
                <div className="circle-content">
                    <div className="shadow-label">SHADOW BOX</div>
                    <img src={product} alt="Product" className="product-img" />

                    {/* Price bubble */}
                    <div className="price-tag">
                        <img src={priceBg} alt="Price BG" className="price-bg" />
                        <div className="price-text">₹Price</div>
                    </div>

                    {/* Arrows */}
                    <div className="arrow-container">
                        <button id="pink-arrow-left">←</button>
                        <button id="pink-arrow-right">→</button>
                    </div>



                    {/* Description */}
                    <div className="description">
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Dis nunc nisl tincidunt ullamcorper in. Id sollicitudin id scelerisque arcu tortor. Nibh ac massa risus non feugiat mauris molestie velit. At risus sagittis suspendisse elementum eros.
                        </p>
                        <button className="shop-now">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pinkpart;
