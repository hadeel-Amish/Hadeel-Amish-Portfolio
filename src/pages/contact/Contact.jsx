import React from "react";
import Nav from "../../components/nav/Nav";
import "./Contact.css";
import Footer from "../../components/footer/Footer";
function Contact() {
  return (
    <div>
      <Nav
        menu={[
          { title: "Home", path: "/" },
          { title: "Porjects", path: "/portfolio" },
          { title: "Contact", path: "/contact" },
        ]}
      />
      <section id="contact">
        <h1 className="sub-heading maintitle">Contact Me</h1>
        <div className="divider"></div>
        <p className="sub-para"></p>
        <div className="contact-row">
          <div className="contact-left">
            <div className="icon-box">
              <div className="icon">
                <a href=" mailto:hadeelamish66.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
              <div className="info">
                <h4> Email:</h4>

                <p> hadeelamish66@gmail.com</p>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <a href="https://wa.me/+963938743200">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </div>
              <div className="info">
                <h4> Call:</h4>
                <p> (+963) 938743200</p>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info">
                <h4>Location:</h4>
                <p> Damscuse-Harasta</p>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26597.126878263338!2d36.39075309590731!3d33.562706294054045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518ef5eb7e640ab%3A0xe715f453ca1b4b8a!2z2K3Ysdiz2KrYp9iMINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1693997255523!5m2!1sar!2s"
                referrerPolicy="no-referrer-when-downgrade"
                // style="border:0;"
                style={{
                  border: "0",
                  width: "100%",
                  height: "100%",
                  loading: "lazy",
                }}
              ></iframe>
            </div>
          </div>
          <div className="contact-right">
            <form action="">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <textarea
                name="msg"
                id="msg"
                rows="9"
                placeholder="Your Message"
              ></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
