import React from 'react';
import './Bluepart.css';
import background from '../assets/vector21.png';
import blueBox from '../assets/vector (19).png';
import houseIcon from '../assets/Group 40043.png';
import musicIcon from '../assets/vector (20).png';
import About from "../assets/About.png"

const Bluepart = () => {
  return (
    <div
      id="about"
      className="bluepart-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bluepart-content">
      
   <img 
  src={About} 
  alt="about" 
  style={{ width: '520px', height: 'auto', display: 'block', marginBottom: '30px' }} 
/>


        <div
          className="bluepart-box"
          style={{ backgroundImage: `url(${blueBox})` }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Quam scelerisque lectus egestas
            purus est ultricies enim enim massa. Egestas nibh nibh venenatis dapibus
            pretium in diam sodales. Dui volutpat condimentum pharetra elementum tellus
            euismod vitae augue. Commodo aliquam rhoncus ut vivamus. Volutpat viverra
            bibendum nam tellus sodales egestas consectetur lacus. Ut quam lectus proin
            ultricies ut est.
          </p>
          <p>
            Nisi sagittis enim etiam egestas. Ac aliquam sed diam vulputate auctor mi.
            Eu sed euismod leo urna id blandit. Lacus fames gravida in eget egestas
            pharetra ultrices massa magna. Tempor ut sed phasellus sed pharetra sit.
            Suscipit viverra dictumst nunc adipiscing arcu.
          </p>
        </div>

        {/* Icons */}
        <img src={houseIcon} alt="house" className="house-icon" />
        <img src={musicIcon} alt="music" className="music-icon" />
      </div>
      
    </div>
  );
};

export default Bluepart;
