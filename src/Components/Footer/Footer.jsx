import React from "react";
import "./footer.css";
import facebookIcon from '../../Assets/Icons/facebook.png'
import instaIcon from '../../Assets/Icons/instagram.png'
import twitterIcon from '../../Assets/Icons/twitter.png'
import linkedinIcon from '../../Assets/Icons/linkedin.png'


const Footer = () => {
  return (
    <section className="FooterSection">
      <div className="footerDiv">
        <div className="mainContainer">

          <div className="companySocials">
            <h2 className="title">FASHION</h2>
            <p className="subtitle">
              Complete your style with awesome clothes from us.
            </p>

            <div className="iconDiv">
              <img src={facebookIcon} alt="facebook" className="icon"/>
              <img src={instaIcon} alt="instagram" className="icon" />
              <img src={twitterIcon} alt="twitter" className="icon"/>
              <img src={linkedinIcon} alt="linkedin" className="icon" />
            </div>
          </div>

          <div className="companyInfo"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
