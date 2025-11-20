"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./../Navbar"
import { siteData } from "../../sitedata";
import TypeText from "../ui/TypeText";

const HeaderSection = () => {
    return (
        <div className="w-full bg-gray-900 h-screen md:h-auto lg:h-screen relative">
            {/* Navbar Component */}
            <Navbar />
            <div className="max-w-6xl mx-auto h-screen md:h-auto lg:h-screen px-4 md:px-4 lg:px-0 pt-32 lg:pt-30">
                <div className="flex flex-col-reverse md:flex-row lg:flex-row lg:items-center lg:justify-between">
                    <div className="text-center md:text-left lg:text-left mt-10 lg:mt-0 md:py-38 lg:py-48 lg:order-1 flex-1">
                        <h4 className="font-poppins text-white font-light text-2xl">Hello there! I&apos;m</h4>
                        <h1 className="font-poppins text-white font-medium lg:font-bold text-3xl lg:text-5xl mt-3 mb-3">{siteData.name}</h1>
                        <TypeText words={siteData.typedWords} />
                    </div>
                    <div className='rounded-full border-5 border-blue-lagoon-300 w-68 h-68 md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] overflow-hidden lg:order-2 mx-auto lg:ml-auto'>
                        <Image src="/images/profile-new.png" width={340} height={340} alt='Dilshan Keerawella' className='rounded-full mx-auto'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;