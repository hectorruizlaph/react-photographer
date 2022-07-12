import React from "react";
import "./About.css";
import AboutImage from "../assets/images/Headshot/DSC_3618.jpg";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-center">
        <div className="about-left">
          <img src={AboutImage} alt="hero_image" />
        </div>
        <div className="about-right">
          <div className="about-text-container">
            <h2>
              I transform your moments <br /> in beautiful memories{" "}
            </h2>
            <p>
              Based in Southern California, Ernesto Olivares has been living his
              dream by capturing moments that will last a lifetime. Emotions,
              details, and candid moments are just a few of the many aspects
              that describe his wedding and portrait photography.
            </p>
            <p>
              Ernesto creates compositions by incorporating natural lighting and
              using reflections, silhouettes and symmetry. The goal is to
              utilize these elements to transform what would normally be a
              conventional photograph into an extraordinary masterpiece. His
              work has appeared in publications such as Icono Magazine, Grace
              Ormonde Wedding Style and cover album for Banda el Recodo one of
              the most influential Latin groups. In addition he has traveled to
              Puerto Rico, Mexico and Costa Rica to photograph destination
              weddings.
            </p>
            <p>
              In 2007, Ernesto picked up his camera and shot his very first
              wedding session. At that moment he discovered his natural love for
              photography; but most importantly his passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
