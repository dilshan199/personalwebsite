"use client";
import React from "react";
import Heading from "../ui/Heading";
import { siteData } from "@/app/sitedata";
import Subtitle from "../ui/Subtitile";
import ReveiwCarousel from "../carousel/ReveiwCarousel";

const Reveiw = () => {
    return (
        <div className="max-w-screen h-auto">
            <div className="max-w-6xl mx-auto md:px-4 lg:px-0">
                <div className="block md:flex lg:flex">
                    <div className="w-full md:w-1/4 lg:w-1/4 h-auto flex-none items-center justify-center">
                        <div className="w-full bg-white h-20 md:h-2/6 lg:h-2/6 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white -mb-18 flex items-center justify-center">
                                <i className="bi bi-quote text-6xl text-blue-lagoon-500"></i>
                            </div> 
                        </div>
                        <div className="w-full h-[171px] bg-[url('/images/re-bg.jpg')] bg-no-repeat bg-center bg-cover">
                            <div className="w-full h-full bg-blue-lagoon-500/60 py-14 px-3">
                                <Heading className="text-lg text-center text-white">{siteData.reviews.heading}</Heading>
                                <Subtitle className="text-center text-white text-sm">{siteData.reviews.subtitle}</Subtitle>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex-auto overflow-hidden py-5">
                        <ReveiwCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reveiw;