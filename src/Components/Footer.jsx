import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id ='Footer' className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Thamaraikannan. All rights reserved.</p>
       
        <div className="footer-social">
          <a href="https://github.com/Thamaraikannan-creator" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/thamaraikannan2003/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/material-outlined/24/000000/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
