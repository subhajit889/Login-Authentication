import React from 'react';
import '../components/stylesheets/footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer container'>
      <footer>
        <div className="container">
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
          &copy; 2023 My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

