
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto p-8">
        <footer className="bg-gray-800 text-white py-6 rounded pl-4 pr-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Yash Soni</p>
              <p className="text-sm">Mobile No.: (+91)8787292310</p>
              <p className="text-sm">Email: darkknightwss27@gmail.com</p>
              <p className="text-sm">Address: KIET Group of Institutions, Ghaziabad, India</p>
            </div>

            <div className="flex">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yash-soni-408b7b216/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 inline-block transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5' }} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 inline-block transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E4405F' }} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/YashSoni878"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white inline-block transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#4078c0' }} />
              </a>
            </div>

            <div>
              <p className="text-sm">© {new Date().getFullYear()} Yash Soni. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
