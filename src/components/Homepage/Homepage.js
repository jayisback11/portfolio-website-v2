import React from "react";
import "./homepage.css";
import { Parallax } from "react-parallax";
import BackgroundImage from "../../assets/images/image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {
  AOS.init({ duration: 400, mirror: true });

  return (
    <Parallax
      className="background-image"
      bgImage={BackgroundImage}
      bgImageAlt="the cat"
      strength={400}
    >
      <div className="homepage-content">
        <h1 data-aos="fade-up-right">Jay Bautista Crisostomo</h1>
        <h2 data-aos="fade-up-left" data-aos-delay={400}>
          Front-End Developer
        </h2>
        <div
          className="btns"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay={800}
        >
          <a href="#about-me">About me</a>
          <a href="#portfolio">Latest Projects</a>
        </div>
      </div>
    </Parallax>
  );
}

export default Homepage;
