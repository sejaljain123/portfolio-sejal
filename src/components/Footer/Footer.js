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
      <div className="block">
        <div className="button-block">
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100039726875356"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" fill="#ffffff" className="icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/sejaljain2001" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" fill="#ffffff" className="icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://twitter.com/SejalJa68705849?s=08" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" fill="#ffffff" className="icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/sejaljain123" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" fill="#ffffff" className="icon" />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/sejal-jain-5a7536194"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" fill="#ffffff" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
