import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className="footerSection">
        <div className="footer-row">
          <div className="footer-row-about">
            <h3>About Us</h3>
            <p>
              EsJare is an Al and IT solutions provider dedicated to
              transforming industries through custom data science, advanced
              analytics, and strategic technology services. Our expertise spans
              healthcare. cybersecurity, cloud solutions, and beyond-empowering
              organizations with Al-driven insights, robust security, and
              seamless system integration. Committed to enhancing operational
              efficiency and patient care, we deliver customized, high-impact
              solutions tailored to each client's unique needs.
            </p>
          </div>
          <div className="footer-row-quicklinks">
            <h3>Quick Links</h3>
            <ul>
              <li>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/About">
                  About
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to="/Church_Newsletter"
                >
                  Church Newsletter
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/Church_Directory">
                  Church Directory
                </Link>{" "}
              </li>
            </ul>
          </div>

          <div className="footer-row-others">
            <h3></h3>
            <ul>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Devo">
                  Devo
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Oversee_Mission">
                  Oversee Mission
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Contact_Us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/Admin_Login">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-social-icon">
          <a href="#">
            <FaFacebookF fill="#0072CE" />
          </a>
          <a href="#">
            <FaInstagram fill="#0072CE" />
          </a>
          <a href="#">
            <FaLinkedinIn fill="#0072CE" />
          </a>
          <a href="#">
            <FaXTwitter fill="#0072CE" />
          </a>
          <a href="#">
            <FaYoutube fill="#0072CE" />
          </a>
        </div>

        <div className="footer-copyright-container">
          <p>
            Copyright @{new Date().getFullYear()} Christian Worker, All Rights
            Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
