import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import '../../CSS/Footer.css';

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-100">
      <div className="flex gap-6">
        <Link to="/formulario" className="footer-link">
          Formulario
        </Link>
        <Link to="/tyc" className="footer-link">
          Términos y Condiciones
        </Link>
        <Link to="/pdp" className="footer-link">
          Política de Privacidad
        </Link>
      </div>

      <div className="flex gap-1">
        <a href="https://wa.me/59173218661">
          <FaWhatsappSquare />
        </a>
        <a href="https://www.tiktok.com/explore">
          <AiFillTikTok />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
