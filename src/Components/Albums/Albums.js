import React from "react";
import "./Albums.css";
import albumImage1 from "./E+J/album1-image1.jpg";
import albumImage2 from "./L+J/Album-image2-shadow.jpg";
import { Link } from "react-router-dom";

function About() {
  const arrow = (
    <svg
      style={{ fill: "white" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
    </svg>
  );

  return (
    <div className="album-container" id="albums">
      <div className="album-headline">
        <h1>Albums</h1>
      </div>
      <div className="album-section">
        <Link to="/album1">
          <div className="image_album_div">
            <div
              className="shadow-div"
              style={{
                backgroundImage: `url(${albumImage1})`,
                width: "100%",
                backgroundSize: "auto 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex">
                <h2 className="album-text">Elizabeth + Josh</h2>
                <div style={{ width: "50px", color: "white" }}>{arrow}</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/album2">
          <div className="image_album_div">
            <div
              className="shadow-div"
              style={{
                backgroundImage: `url(${albumImage2})`,
                backgroundSize: "auto 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex">
                <h2 className="album-text">Elizabeth + Josh</h2>
                <div style={{ width: "50px" }}>{arrow}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default About;
