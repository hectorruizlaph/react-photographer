import React from "react";
import { photos } from "./photos";
import "./Album1.css";

function Album1() {
  return (
    <div className="album_full">
      <div className="album_title">
        <h1>Elizabeth + Josh</h1>
      </div>
      <div className="album_images">
        {photos.map((x) => {
          return <img className="album_image" width={"30%"} key={`${x.src}`} src={`${x.src}`} />;
        })}
      </div>
    </div>
  );
}

export default Album1;
