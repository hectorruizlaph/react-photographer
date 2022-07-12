import React from "react";
import "./Footer.css";
import FB from "../assets/icons/FB.svg";
import IG from "../assets/icons/IG.svg";
import YP from "../assets/icons/yelp.svg";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="upper-container">
        <div className="center-upper-div">
          <div className="footer-left">
            <h1>Contact Me!</h1>
            <p>2022 season is open! Bookings available </p>
            <p>Contact me, I would love to know more about you. </p>
          </div>
          <div className="footer-right">
            <p>erniesimages@gmail.com</p>
            <p>+ 714713 3328</p>
            <p>
              17221 E 17th St, Santa Ana,
              <br />
              CA 92705, Suite A{" "}
            </p>
            <div className="footer-icons-container">
              <div className="footer-icon">
                <a href="/">
                  <img src={FB} alt="facebook" style={{ width: "25px" }} />
                </a>
              </div>
              <div className="footer-icon">
                <a href="/">
                  <img
                    src={IG}
                    alt="instagram"
                    style={{ width: "55px", paddingTop: "7px" }}
                  />
                </a>
              </div >
              <div className="footer-icon">
                <a href="/">
                  <img
                    src={YP}
                    alt="yelp"
                    style={{
                      width: "73px",
                      paddingTop: "6px",
                      marginLeft: "-21px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="down-container">
        <p> Ⓒ Ernesto Olivares Photography. All Rights Reserved 2022</p>
      </div>
    </div>
  );
}

export default Footer;
