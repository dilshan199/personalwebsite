"use client";
import React from "react";
import Heading from "../ui/Heading";
import { siteData } from "@/app/sitedata";
import Subtitle from "../ui/Subtitile";
import TechnologyCarousel from "../carousel/TechnologyCarousel";

const Technology = () => {
    return (
        <div className="max-w-screen">
            <div className="max-w-6xl mx-auto px-4 md:px-4 lg:px-0 py-10">
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-0 lg:gap-0">
                    <div className="border-s-3 border-s-blue-lagoon-500 pl-3">
                        <Heading className="text-lg">{siteData.technology.heading}</Heading>
                        <Subtitle className="text-sm text-blue-lagoon-500 mt-2">{siteData.technology.subtitle}</Subtitle>
                    </div>
                    <div className="overflow-hidden col-span-4 py-0 md:py-3 lg:py-3">
                        <TechnologyCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;