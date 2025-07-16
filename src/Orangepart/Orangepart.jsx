import React from "react";
import "./Orangepart.css";

import bgYellow from "../assets/Vector (9).png";
import bgBlue from "../assets/Vector (10).png";
import arrowBg from "../assets/Vector (12).png";
import viewMoreBg from "../assets/Vector (13).png";
import musicWhite from "../assets/Vector (14).png";
import musicGreen from "../assets/Vector (15).png";
import heartBg from "../assets/Group 40142.png";
import clip2 from "../assets/Clip path group (2).png";
import clip3 from "../assets/Clip path group (3).png";
import clip4 from "../assets/Clip path group (4).png";
import clip5 from "../assets/Clip path group (5).png";
import Bow from "../assets/Bow.png"

const products = [
    {
        id: "card1",
        image: clip2,
        bg: bgYellow,
        title: "Stacker Box Multiblocks",
        price: "₹1499.00",
    },
    {
        id: "card2",
        image: clip3,
        bg: bgBlue,
        title: "Shadow Box Mahabharata",
        price: "₹1499.00",
    },
    {
        id: "card3",
        image: clip4,
        bg: bgYellow,
        title: "Cube Tales",
        price: "₹1499.00",
    },
    {
        id: "card4",
        image: clip5,
        bg: bgBlue,
        title: "3D Buddies",
        price: "₹1499.00",
    },
];

export default function Orangepart() {
    return (
        <div id="Orangepart">
            <img src={Bow} alt="bow" style={{
                width: '100px',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
            }} />

            <img src={musicWhite} id="Orangepart-music" alt="music" />

            <h2 id="Orangepart-heading">Lorem Ipsum Dolor Sit Amet</h2>
            <p id="Orangepart-desc">
                Lorem ipsum dolor sit amet consectetur. Adipiscing ad scelerisque nulla
                condimentum fermentum.
            </p>

            <div id="Orangepart-wrapper">
                <div className="arrow-button left-arrow">
                    <img src={arrowBg} alt="left-arrow-bg" className="arrow-bg" />
                    <span className="arrow-icon">&#10094;</span> {/* Left Arrow */}
                </div>

                <div id="Orangepart-cards">
                    {products.map((product) => (
                        <div id={product.id} key={product.id}>
                            <img src={product.bg} alt="card-bg" id={`${product.id}-bg`} />
                            <img src={heartBg} id={`${product.id}-heart`} alt="heart-bg" />
                            <img src={product.image} alt="product-img" id={`${product.id}-img`} />
                            <div id={`${product.id}-info`}>
                                <p>{product.title}</p>
                                <h4>{product.price}</h4>
                                <button id={`${product.id}-btn`}>SHOP NOW</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrow-button right-arrow">
                    <img src={arrowBg} alt="right-arrow-bg" className="arrow-bg" />
                    <span className="arrow-icon">&#10095;</span> {/* Right Arrow */}
                </div>
            </div>




            <div id="Orangepart-viewmore-container">
                <img src={viewMoreBg} id="Orangepart-viewmore-bg" alt="view-more-bg" />
                <button id="Orangepart-viewmore">VIEW MORE</button>
            </div>
        </div>
    );
}
