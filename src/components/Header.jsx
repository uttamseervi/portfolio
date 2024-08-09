/*

import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Header = () => {
    return (
        <section>
            <div className="bg-[#0B0B0B]">
                <br />
                <div className="max-w-full scroll-smooth bg-transparent backdrop-blur-sm flex sm:flex-row flex-col font-SpaceGrotesk justify-around items-center sm:py-7 sm:px-8 text-white fixed top-0 z-10 lg:w-screen md:w-screen w-screen">
                    <div className="details">
                        <h2 className="font-semibold text-2xl sm:mt-0 mt-2 sm:mb-0 mb-2 md:text-xl">Uttam Seervi</h2>
                        <p className="text-sm text-gray-500 sm:mt-0 mt-1 sm:mb-0 mb-1 md:text-xs">Fullstack Web Developer</p>
                    </div>
                    <nav className="relative border-none rounded-full sm:gap-3 gap-0 flex justify-between items-center bg-[#222222] p-1 sm:mt-0 mt-3 sm:mb-0 mb-3">
                        <NavLink
                            className="bg-black rounded-full transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 px-3 py-2 text-center inline-block"
                            exact
                            to="/"
                            activeClassName="active"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="bg-[#222222] rounded-full transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 px-3 py-2 text-center inline-block"
                            to="/work"
                            activeClassName="active"
                        >
                            Work
                        </NavLink>
                        <NavLink
                            className="bg-[#222222] rounded-full transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 py-2 text-center inline-block"
                            to="/about"
                            activeClassName="active"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="bg-[#222222] rounded-full transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 px-3 py-2 text-center inline-block"
                            to="/contact"
                            activeClassName="active"
                        >
                            Contact
                        </NavLink>
                    </nav>
                    <div className="lg:flex md:flex hidden items-center">
                        <span className="relative inline-flex rounded-full h-2 w-2 m-1 text-center bg-green-500"></span>
                        <p className="text-green-500 text-md sm:mt-0 mt-2 sm:mb-0 mb-2">Available</p>
                    </div>
                    <div className="social gap-4 text-lg md:flex lg:flex hidden">
                        <a
                            href="https://www.linkedin.com/in/uttam-seervi-8500032ab/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#222222] px-2 py-2 rounded-lg"
                        >
                            <CiLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/uttamseervii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#222222] px-2 py-2 rounded-lg"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#222222] px-2 py-2 rounded-lg"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
*/
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Header = () => {
    return (
        <section>
            <div className="bg-[#0B0B0B] overflow-x-hidden">
                <br />
                <div className="max-w-full scroll-smooth bg-transparent backdrop-blur-sm flex sm:flex-row flex-col font-SpaceGrotesk justify-around items-center sm:py-7 sm:px-8 text-white fixed top-0 z-10 lg:w-screen md:w-screen w-screen">
                    <div className="details">
                        <h2 className="font-semibold text-2xl sm:mt-0 mt-2 sm:mb-0 mb-2 md:text-xl">Uttam Seervi</h2>
                        <p className="text-sm text-gray-500 sm:mt-0 mt-1 sm:mb-0 mb-1 md:text-xs">Fullstack Web Developer</p>
                    </div>
                    <nav className=" border-none rounded-full sm:gap-3 gap-0 flex justify-between items-center bg-[#222222] p-1 sm:mt-0 mt-3 sm:mb-0 mb-3">
                        <NavLink
                            className={({ isActive }) => (
                                `transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 px-3 py-2 text-center inline-block 
                                ${isActive ? "bg-black rounded-full" : "bg-transparent"}`
                            )}
                            exact
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (
                                `rounded-full transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 px-3 py-2 text-center inline-block 
                                ${isActive ? "bg-black rounded-full" : "bg-transparent"}`
                            )}
                            to="/work"
                        >
                            Work
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (
                                `rounded-full transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 py-2 text-center inline-block 
                                ${isActive ? "bg-black rounded-full" : "bg-transparent"}`
                            )}
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (
                                `rounded-full transition-all duration-500 ease-in-out sm:text-lg text-md font-semibold sm:px-4 px-3 py-2 text-center inline-block 
                                ${isActive ? "bg-black rounded-full" : "bg-transparent"}`
                            )}
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </nav>
                    <div className="lg:flex md:flex hidden items-center">
                        <span className="relative inline-flex rounded-full h-2 w-2 m-1 text-center bg-green-500"></span>
                        <p className="text-green-500 text-md sm:mt-0 mt-2 sm:mb-0 mb-2">Available</p>
                    </div>
                    <div className="social gap-4 text-lg md:flex lg:flex hidden">
                        <a
                            href="https://www.linkedin.com/in/uttam-seervi-8500032ab/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#222222] px-2 py-2 rounded-lg"
                        >
                            <CiLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/uttamseervii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#222222] px-2 py-2 rounded-lg"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#222222] px-2 py-2 rounded-lg"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;

