import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-400 py-6 fixed bottom-0 w-full">
      <div className="flex justify-center">
        <a
          href="https://github.com/IsaiasD18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mx-2 sm:mx-4"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/my-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mx-2 sm:mx-4"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://stackoverflow.com/users/my-stackoverflow-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mx-2 sm:mx-4"
        >
          <FaStackOverflow size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
