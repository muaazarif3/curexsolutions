import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import gsap from "gsap";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const overlayRef = useRef(null);

    // Animate overlay when state changes
    useEffect(() => {
        if (isMenuOpen) {
            gsap.fromTo(
                overlayRef.current,
                { x: "100%" },             // starting position (off screen to right)
                { x: "0%", duration: 0.4, ease: "power3.out" } // slides in
            );
        } else {
            gsap.to(overlayRef.current, {
                x: "100%", duration: 0.35, ease: "power3.in"   // slides out
            });
        }
    }, [isMenuOpen]);


    return (
        <>
            {/* Fixed Header */}
            <header className=" text-white absolute px-16 py-8 top-0 left-0 w-full z-40">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">
                      <img src={logo}
                      className="w-40 h-40 absolute top-[-20%] left-0 md:top-[-35%]"
                      alt="" />
                    </div>

                    <nav className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/services" className="hover:underline">Services</Link>
                        <Link to="/contact" className="hover:underline">Contact Us</Link>
                        <Link to="/about" className="hover:underline">About Us</Link>
                        <a
                            href="tel:+1234567890"
                            className="w-full lg:w-auto px-6 py-2 text-white font-semibold rounded-lg bg-primary 
                       hover:bg-cyan-600 transition-all duration-200 ease-in-out 
                       flex  gap-2 justify-center items-center shadow-xl hover:shadow-cyan-500/50 
                       max-w-xs mx-auto" // Added max-width and margin auto for centering/desktop visibility
                        >
                            Request Demo
                           <FaArrowRightLong className="mt-1" />
                        </a>
                    </nav>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                        <HiMenu size={28} />
                    </button>
                </div>
            </header>

            {/* GSAP Animated Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col p-6 translate-x-full"
                style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
            >
                {/* Close Button */}
                <button
                    className="self-end text-white text-4xl mb-8"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <HiX />
                </button>

                {/* Nav links */}
                <nav className="space-y-6 text-white text-2xl flex flex-col  gap-2 font-medium">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <a
                        href="tel:+1234567890"
                        className="w-full lg:w-auto px-6 py-2 text-white font-semibold rounded-lg bg-primary 
                       hover:bg-cyan-600 transition-all duration-200 ease-in-out 
                       flex  gap-2 justify-center items-center shadow-xl hover:shadow-cyan-500/50 
                       max-w-xs mx-auto" 
                    >
                       Discovery Call
                      <FaArrowRightLong  className="mt-1"/>
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Header;
