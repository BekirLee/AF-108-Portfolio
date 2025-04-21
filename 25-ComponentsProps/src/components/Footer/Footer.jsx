import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import "./Footer.css"; // Stiller için CSS dosyası

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links" style={{ alignItems: "center" }}>
          <p style={{ color: "#000" }}>Copyright © Your Website 2023</p>
          <div className="">
            <FaTwitter style={{ color: "#000", padding: "0 15px" }} />
            <FaFacebookF style={{ color: "#000", padding: "0 15px" }} />
            <FaLinkedinIn style={{ color: "#000", padding: "0 15px" }} />
          </div>
          <div className="">
            <a href="/privacy-policy" style={{ padding: "0 15px" }}>
              Privacy Policy
            </a>
            <a href="/terms-of-use" style={{ padding: "0 15px" }}>
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
