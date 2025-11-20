"use client";
import React from "react";
import Heading from "../ui/Heading";
import Subtitle from "../ui/Subtitile";
import { siteData } from "@/app/sitedata";
import Link from "next/link";

const Company = () => {
    return (
        <div className="max-w-screen h-auto bg-[url('/images/c_bg.jpg')] bg-no-repeat bg-center bg-cover" id="Company">
            <div className="max-w-screen h-auto bg-blue-lagoon-500/70">
                <div className="max-w-6xl mx-auto px-4 md:px-4 lg:px-0 py-14">
                    <Heading className="text-white text-center text-lg">{siteData.company.heading}</Heading>
                    <Subtitle className="text-sm text-white text-center mt-2">{siteData.company.subtitle}</Subtitle>
                    <p className="mt-5 text-sm font-poppins font-normal text-center text-white">{siteData.company.description}</p>
                    <Link href="#" className="flex items-center justify-center px-3 py-2 font-medium bg-white text-blue-lagoon-500 hover:text-blue-lagoon-400 rounded-full w-[50%] md:w-[15%] mx-auto mt-5">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default Company;