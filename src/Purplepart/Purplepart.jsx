import React, { useState } from 'react';
import './Purplepart.css';
import bg from '../assets/Vector (32).png';
import arrowIcon from '../assets/Vector (25).png';
import formBg from '../assets/Vector (31).png';
import pinIcon from '../assets/Vector (27).png';
import leftBrace from '../assets/Vector (29).png';
import rightBrace from '../assets/Vector (28).png';
import dropdownBg from '../assets/Vector (26).png';
import topwave from "../assets/top-wave.png"
const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer:
      'In the case of faulty or damaged goods, notify us within 3–5 days of delivery with pictures supporting your claim. We will be happy to refund the stated price of the item or send you a replacement.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Answer content goes here...',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Answer content goes here...',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Answer content goes here...',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Answer content goes here...',
  },
];

const Purplepart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    
    <>

  <img src={topwave} alt="top wave" style={{ width: '100%', display: 'block', marginBottom: '-5px' }} />

    <div
      className="purplepart-container"
      style={{ backgroundImage: `url("${bg}")` }}
    >

      <div className="purplepart-decor">
        <img src={leftBrace} alt="left-brace" className="left-brace" />
        <img src={rightBrace} alt="right-brace" className="right-brace" />
        <img src={arrowIcon} alt="arrow" className="center-arrow" />
      </div>

      <div className="purplepart-heading">
        <h3>HEADING GOES HERE</h3>
        <h2>LOREM IPSUM DOLOR SIT AMET</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit aliquam eu volutpat ut et fermentum nisl.
          Duis viverra praesent tincidunt est est purus. Aliquet porta a arcu cursus malesuada a
          sed. Vel vitae nam lectus cursus sed habitasse sit nam tortor.
        </p>
        <div className="green-line" />
      </div>

      <div className="faq-form" style={{ backgroundImage: `url(${formBg})` }}>
        <img src={pinIcon} alt="pin" className="pin-icon" />
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              style={{ backgroundImage: `url(${dropdownBg})` }}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}

        <div className="faq-view-more">VIEW MORE</div>
      </div>
    </div>
    </>
  );
};

export default Purplepart;
