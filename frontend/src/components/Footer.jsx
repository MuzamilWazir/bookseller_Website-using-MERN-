import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import footerLogo from "../assets/footer-logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w1/2 w-full">
          <img src={footerLogo} alt="logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full">
          <p className="MB-4">To Subceribe our Website Enter Your Email</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 text-black"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#privacy" className="hover:bg-primary">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:bg-primary">
              Terms of Services
            </a>
          </li>
        </ul>
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noeferrer"
            className="hover:text-primary"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="https://twiter.com"
            target="_blank"
            rel="noopener noeferrer"
            className="hover:text-primary"
          >
            <FaTwitter size={24} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noeferrer"
            className="hover:text-primary"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
