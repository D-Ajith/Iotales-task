import React from 'react';
import './Yellowpart.css';
import bg from '../assets/Vector (24).png';
import card1 from '../assets/Group (1).png';
import card2 from '../assets/Group (2).png';
import card3 from '../assets/Group (3).png';
import card4 from '../assets/Group (4).png';
import stars from '../assets/Group (5).png';
import cardTopImage from '../assets/Group 40091.png';
import arrowBg from '../assets/Vector (22).png';
import Thumpsup from "../assets/Thumpsup.png"
import Cloud from "../assets/yellowblueclouds.png"

const Yellowpart = () => {
    const cards = [
        {
            bg: card1,
            name: 'Customer Name',
            text: 'Lorem ipsum dolor sit amet consectetur. Orci ultricies proin dolor a vitae nunc......',
        },
        {
            bg: card2,
            name: 'Customer Name',
            text: 'Quis etiam aenean urna est a. Dolor mauris sed tempus hac tempus tincidunt...',
        },
        {
            bg: card3,
            name: 'Customer Name',
            text: 'Lorem ipsum dolor sit amet consectetur. Orci ultricies proin dolor a vitae nunc......',
        },
        {
            bg: card4,
            name: 'Customer Name',
            text: 'Quis etiam aenean urna est a. Dolor mauris sed tempus hac tempus tincidunt...',
        },
    ];

    return (
       <>
               <img src={Cloud} alt="top wave" style={{ width: '100%', display: 'block', marginBottom: '-20px' }} />
        <div
            className="yellowpart-container"
            style={{ backgroundImage: `url(${bg})` }}
            id="testimonials"
        >
            <div className="yellowpart-heading">
                <div className="thumb-icon"><img src={Thumpsup} alt="bow"style={{
                    width: '200px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto'}}/></div>
                <h2>HEADING GOES HERE</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Purus vulputate leo malesuada ut euismod. Nulla
                    auctor et mauris suscipit augue. Mi leo tempus eget sit est tempor iaculis pulvinar vitae.
                    Dis urna et a pellentesque neque nunc arcu.
                </p>
            </div>
            <div className="yellowpart-carousel">
                <button className="arrow-button left-arrow">←</button>

                <div className="yellowpart-cards">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="testimonial-card"
                            style={{
                                backgroundImage: `url("${card.bg}")`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="card-content">
                                <img src={cardTopImage} alt="card top" className="card-top-image" />
                                <h4>{card.name}</h4>
                                <p>{card.text}</p>
                                <img src={stars} alt="rating" className="stars" />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="arrow-button right-arrow">→</button>
            </div>


            <div className="view-more-wrapper">
                <button className="view-more-button">View more</button>
            </div>

        </div>
       </>
    );
};

export default Yellowpart;
