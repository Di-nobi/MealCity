import React from "react";
import thirdImg from '../images/thirdImg.jpg';

export default function Card() {
    return (
        <div>
            <h1> Our Services </h1>
        <div className="card">
            <img src={thirdImg} className="card--image" alt="background-image" />
            <div className="card--stats">
                <span>Nigeria</span>
                <span>6.0</span>
            </div>
            <p> Live your life</p>
        </div>
        </div>
    )
}