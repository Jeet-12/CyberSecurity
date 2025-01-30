import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
import Logo from "../Nav/Logo";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
          <Logo/>
          <p className="text">
          Secure Code & Project: Raipur's trusted cybersecurity organization safeguarding digital futures with expertise and innovation.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hum_bhi_engineer?igsh=dHN4dTZpZjluZDVr">
                <CgInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#" className="text">
                Cyber Security
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Software Development
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Secure Code/Penetration Testing
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Web Development
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address className="text">
                Office: Raipur, Chhattisgarh
              </address>
            </li>
            <li>
              <a href="tel:+919131814057" className="text">
                Tel : +919131814057
              </a>
            </li>
            <li>
              <a href="mailto:humbhiengineer@gmail.com" className="text">
                Email: humbhiengineer@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
