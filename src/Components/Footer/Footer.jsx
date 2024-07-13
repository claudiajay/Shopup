import React from "react";
import "./footer.css";
import facebookIcon from "../../Assets/Icons/facebook.png";
import instaIcon from "../../Assets/Icons/instagram.png";
import twitterIcon from "../../Assets/Icons/twitter.png";
import linkedinIcon from "../../Assets/Icons/linkedin.png";

const Footer = () => {
  return (
    <section className="FooterSection">
      <div className="footerDiv">
        <div className="mainContainer">
          <div className="companySocials">
            <div className="textContainer">
              <h2 className="title">FASHION</h2>
              <p className="subtitle">
                Complete your style with awesome clothes from us.
              </p>
            </div>

            <div className="iconDiv">
              <img src={facebookIcon} alt="facebook" className="icon" />
              <img src={instaIcon} alt="instagram" className="icon" />
              <img src={twitterIcon} alt="twitter" className="icon" />
              <img src={linkedinIcon} alt="linkedin" className="icon" />
            </div>
          </div>

          <div className="companyInfo">
            <div className="one">
              <ul>
                <li>
                  <p className="subtitle">Company</p>
                </li>

                <li>
                  <a href="#" className="footerText">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footerText">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="footerText">
                    Support
                  </a>
                </li>

                <li>
                  <a href="#" className="footerText">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="two">
              <ul>
                <li>
                  <p className="subtitle">Quick Link</p>
                </li>

                <li>
                  <a href="#" className="footerText">
                    Share Location
                  </a>
                </li>
                <li>
                  <a href="#" className="footerText">
                    Orders Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="footerText">
                    Size Guide
                  </a>
                </li>

                <li>
                  <a href="#" className="footerText">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="three">
              <ul>
                <li>
                  <p className="subtitle">Legal</p>
                </li>

                <li>
                  <a href="#" className="footerText">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footerText">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
