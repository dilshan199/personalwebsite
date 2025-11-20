"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Link, scrollSpy} from 'react-scroll';
import NavbarLink from "./ui/NavLink";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        scrollSpy.update();
    }, []);

    return (
        <nav className="fixed w-full top-0 left-0 z-20 shadow-md bg-gray-900">
            <div className="container mx-auto flex justify-between py-3 px-3 items-center">
                <div>
                    <Link to="" smooth={true} className="cursor-pointer">
                        <Image src="/images/dk_logo.png" width={120} height={120} alt="Your Logo"></Image>
                    </Link>
                </div>
                <div>
                    {/* Hamburger Menu for Mobile */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className=" text-white hover:text-blue-lagoon-500 focus:outline-none cursor-pointer">
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                </svg>
                                )}
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"} w-full lg:w-auto bg-gray-800 lg:bg-transparent absolute lg:relative left-0 top-16 md:top-20 lg:top-0`}>
                        <ul className="block lg:flex lg:justify-items-end">
                            <li>
                                <NavbarLink to="Home" onclick={() => setIsOpen(false)}>Home</NavbarLink>
                            </li>
                            <li>
                                <NavbarLink to="aboutMe" onclick={() => setIsOpen(false)}>Abount Me</NavbarLink>
                            </li>
                            <li>
                                <NavbarLink to="WhatIDo" onclick={() => setIsOpen(false)}>What I Do</NavbarLink>
                            </li>
                            <li>
                                <NavbarLink to="Company" onclick={() => setIsOpen(false)}>Company</NavbarLink>
                            </li>
                            <li>
                                <NavbarLink to="Projects" onclick={() => setIsOpen(false)}>Projects</NavbarLink>
                            </li>
                            <li>
                                <NavbarLink to="Contact" onclick={() => setIsOpen(false)}>Contact</NavbarLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;