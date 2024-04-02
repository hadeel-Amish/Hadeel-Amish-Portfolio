import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="rowfooter">
        <div className="colfooter">
          <h1>Hadeel Amish</h1>
          <p>Front End Developer</p>
        </div>
        <div className="colfooter">
          <div className="social-icons">
            <div className="h1-icon">
              <h5>Contact me to make your website appear professional</h5>
            </div>
            <div className="icon-col">
              <div className="icon-row">
                <div className="icon">
                  <a
                    href="https://github.com/hadeel-Amish"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon">
                  <a
                    href="https://www.facebook.com/hadeelmhmd.amish"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon">
                  <a
                    href="https://wa.me/+963938743200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon">
                  <a
                    href="https://www.linkedin.com/in/hadeel-amish-a0a047242/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="icon-col">
              <div className="icon-row">
                <div className="icon">
                  <a
                    href="https://www.linkedin.com/in/hadeel-amish-a0a047242/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon">
                  <a
                    href="mailto:hadeelamish66.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon">
                  <a href="mailto:hadeelamish66.com">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", padding: "20px 0" }}>
        © copyright 2024 Designd By Hadeel
      </p>
    </div>
  );
}

export default Footer;
