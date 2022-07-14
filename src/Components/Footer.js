import React from "react";
import "./Footer.css";
import IG from "../assets/icons/IG.svg";
import YP from "../assets/icons/yelp.svg";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="upper-container">
        <div className="center-upper-div">
          <div className="footer-left">
            <h1>Contact Me!</h1>
            <p>2022 season is open! <br/>Bookings available. </p>
            <p>Contact me, I would love to know more about you. </p>
          </div>
          <div className="footer-right">
            <p>erniesimages@gmail.com</p>
            <a href="tel:714-713-3328">+ 714713 3328</a>
            <p>
              17221 E 17th St, Santa Ana,
              <br />
              CA 92705, Suite A
            </p>
            <div className="footer-icons-container">
              <div className="footer-icon">
                <a
                  href="https://www.instagram.com/ernestoolivaresphotography/?hl=en"
                  target="blank"
                >
                  <img
                    id="ig"
                    src={IG}
                    alt="instagram"
                  />
                </a>
              </div>
              <div className="footer-icon">
                <a
                  href="https://www.yelp.com/biz/ernesto-olivares-photography-santa-ana"
                  target="blank"
                >
                  <img
                    id="yp"
                    src={YP}
                    alt="yelp"
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
