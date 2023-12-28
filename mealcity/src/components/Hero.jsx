import React from "react";
import backgroundImage from '../images/backgroundImage.webp';

export default function Hero() {
    return (
        <div>
        <section className="Hero" style={{
            // backgroundImage: `linear-gradient(rgba(0, 55, 255, 0.8), rgba(0, 55, 255, 0.8)), url(${backgroundImage})`,
            backgroundColor: "rgb(0, 0, 0)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            height: "700px",
            marginBottom: "40px"
          }}>
            <div>
                <h1 className="business--name"> Meal City</h1>
            </div>
            <div
          className="background-image"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            // backgroundPosition: "left",
          }}
        ></div>
        </section>
        </div>
    )
}