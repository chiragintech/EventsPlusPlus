import React from 'react'
import './Footer.css';
//import social media icons
import { ImFacebook2 } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className="copyright">Copyright &copy; 2023 Event++</p>
      <div className="social-icons">
        <img src={ImFacebook2} alt="Facebook" />
        <a href={FaTwitter}>Twitter</a>
        <a href={FaInstagram}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer