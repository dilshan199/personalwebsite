"use client";
import React, { useEffect } from "react";
import { Link, scrollSpy } from "react-scroll";

interface NavbarLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavbarLink = ({to, children, onclick}: NavbarLinkProps & {onclick?: () => void; }) => {
    useEffect(() => {
        // ensures spy positions are calculated after mount/images load
        scrollSpy.update();
    }, []);

    return (
        <Link
            to={to}
            smooth={true}
            duration={500}
            spy={true}
            onClick={onclick}
            className="text-white text-xs flex font-medium cursor-pointer hover:text-blue-lagoon-500 hover:bg-gray-700 lg:hover:bg-transparent w-full py-3 px-3"
        >{children}</Link>
    );
};

export default NavbarLink;