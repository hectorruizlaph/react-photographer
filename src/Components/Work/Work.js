import React, { useState } from "react";
import "./Work.css";
import Weddings from "./weddings/Weddings";
import Engagement from "./engagement/Engagement";
import Maternity from "./maternity/Maternity";
import Family from "./family/Family";

export default function Work4() {
  const [active, setActive] = useState("first");

  return (
    <div className="container" id="work">
      <div className="section">
        <h1 className="headline">My Work</h1>
        <div className="work_nav">
          <ul className="work_list">
            <li>
              <button
                className={`button ${
                  active === "first" ? "activeButton" : ""
                }`}
                onClick={() => {
                  setActive("first");
                }}
              >
                WEDDINGS
              </button>
            </li>
            <li>
              <button
                className={`button ${
                  active === "second" ? "activeButton" : ""
                }`}
                onClick={() => {
                  setActive("second");
                }}
              >
                ENGAGEMENT
              </button>
            </li>
            <li>
              <button
                className={`button ${
                  active === "third" ? "activeButton" : ""
                }`}
                onClick={() => {
                  setActive("third");
                }}
              >
                MATERNITY
              </button>
            </li>
            <li>
              <button
                className={`button ${
                  active === "forth" ? "activeButton" : ""
                }`}
                onClick={() => {
                  setActive("forth");
                }}
              >
                FAMILY
              </button>
            </li>
          </ul>
        </div>
          { active === 'first' ? <Weddings /> : ""}
          { active === 'second' ? <Engagement /> : ""}
          { active === 'third' ? <Maternity /> : ""}
          { active === 'forth' ? <Family /> : ""}
      </div>
    </div>
  );
}
