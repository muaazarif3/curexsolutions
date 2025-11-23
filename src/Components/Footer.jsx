import React from "react";
import logo from '../assets/logo.png';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full bg-[#F0F4F8] py-12 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

                {/* Logo + Contact */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-40 w-auto"
                    />
                    <p className="text-gray-600 text-sm">© 2025 Your Company. All rights reserved.</p>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-2 mt-3 text-gray-700 text-sm">
                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="text-[#005A9C]" /> +92 370 0968677

                        </p>
                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-[#005A9C]" /> Info@curex.solutions
                        </p>
                    </div>
                </div>

                {/* Links */}
                <ul className="flex flex-wrap justify-center md:justify-center gap-4 text-gray-700 font-medium">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <Link to="/services" className="hover:underline">Service</Link>
                </ul>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-end gap-4 text-[#005A9C] text-2xl">
                    <a href="#" className="hover:opacity-70"><FaFacebookF /></a>
                    <a href="#" className="hover:opacity-70"><FaInstagram /></a>
                    <a href="#" className="hover:opacity-70"><FaTwitter /></a>
                    <a href="#" className="hover:opacity-70"><FaLinkedinIn /></a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
