"use client";
import React, {useEffect} from "react";
import {Link, scrollSpy} from "react-scroll";
import Image from "next/image";
import Heading from "./../ui/Heading";
import Subtitle from "../ui/Subtitile"; 
import { siteData } from "@/app/sitedata";

const About = () => {
    useEffect(() => {
        scrollSpy.update();
    }, []);

    return (
        <div className="w-full" id="aboutMe">
            <div className="max-w-6xl mx-auto h-auto px-4 md:px-4 py-14 lg:py-18">
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-5 md:gap-0 lg:gap-0">
                    <div className="md:col-span-2 lg:col-span-2 overflow-hidden relative w-full h-64 lg:h-full">
                        <Image src="/images/professional.jpg" alt="About me section image" fill className="object-cover w-full h-auto"></Image>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 py-4 md:px-4 md:py-6 lg:py-0">
                        <div className="border-s-3 border-s-blue-lagoon-500 pl-4">
                            <Heading className="text-lg">{siteData.about.heading}</Heading>
                            <Subtitle className="text-sm text-blue-lagoon-500">{siteData.about.Subtitle}</Subtitle>
                        </div>
                        <p className="text-sm font-poppins font-normal text-gray-500 text-justify mt-5">{siteData.about.description}</p>
                        <h6 className='mt-5 font-semibold font-poppins text-sm'>Key Strengths:</h6>
                        <ul className='text-sm font-normal font-poppins text-gray-500 space-x-2 mt-5 space-y-3 mb-5'>
                            <li className='flex items-start space-x-2'>
                                <i className="bi bi-crosshair2 text-blue-lagoon-500"></i>
                                <p>{siteData.about.stengths[0]}</p>
                            </li>
                            <li className='flex items-start space-x-2'>
                                <i className="bi bi-crosshair2 text-blue-lagoon-500"></i>
                                <p>{siteData.about.stengths[1]}</p>
                            </li>
                            <li className='flex items-start space-x-2'>
                                <i className="bi bi-crosshair2 text-blue-lagoon-500"></i>
                                <p>{siteData.about.stengths[2]}</p>
                            </li>
                            <li className='flex items-start space-x-2'>
                                <i className="bi bi-crosshair2 text-blue-lagoon-500"></i>
                                <p>{siteData.about.stengths[3]}</p>
                            </li>
                        </ul>
                        <Link to='review' smooth={true} duration={600} offset={-80} className='bg-blue-lagoon-500 hover:bg-blue-lagoon-400 cursor-pointer text-sm font-semibold font-poppins px-1.5 py-1.5 rounded-full text-white'>What My Client Says</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;