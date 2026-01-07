import React from "react";
import logo from '../assets/logo.png';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full bg-[#F0F4F8] py-12 relative">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

                {/* Logo + Contact */}
                <div className="flex flex-col items-center md:items-start gap-3 ">
                   
                   <div className=" md:absolute left-[43%]  bottom-[25%] ">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-48 w-auto"
                    />
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-2 mt-3  text-gray-700 text-1xl">
                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="text-[#005A9C]" /> +1 716 214 5530

                        </p>
                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-[#005A9C]" /> Info@curex.solutions
                        </p>
                    </div>
                    <p className="text-gray-600 text-sm">© 2025 Curex Solutions. All rights reserved.</p>

                </div>

                {/* Links */}
                <ul className="flex flex-wrap justify-center md:justify-center mt-10 gap-4 text-gray-700 font-medium">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <Link to="/services" className="hover:underline">Service</Link>
                </ul>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-end gap-4 text-[#005A9C] text-2xl">

                    <a
                        href="https://wa.me/17162145530"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70"
                    >
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/company/curex-solutions/" target="_blank" className="hover:opacity-70"><FaLinkedinIn /></a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
