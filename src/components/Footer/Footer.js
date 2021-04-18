import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
function Footer() {
  return (
    <div className="Footer">
      <h2 className="contact">Contact Me</h2>
      <div className="links">
        <a
          href="https://www.facebook.com/profile.php?id=100039726875356"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" fill="#ffffff" />
        </a>
        <a href="https://www.instagram.com/sejaljain2001" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" fill="#ffffff" />
        </a>
        <a href="https://twitter.com/SejalJa68705849?s=08" className="twitter social ">
          <FontAwesomeIcon icon={faTwitter} size="2x" fill="#ffffff" />
        </a>
        <a href="https://github.com/sejaljain123" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" fill="#ffffff" />
        </a>
        <a href="https://www.linkedin.com/in/sejal-jain-5a7536194" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" fill="#ffffff" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
