"use client";
import React from "react";
import Heading from "../ui/Heading";
import Subtitle from "../ui/Subtitile";
import ServiceBox from "../ui/ServiceBox";
import { siteData } from "@/app/sitedata";

const Service = () => {
    return (
        <div className="w-full" id="WhatIDo">
            <div className="max-w-6xl mx-auto px-4 md:px-4 lg:px-0 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-0 md:gap-4 lg:gap-6">
                    <div className="order-2 md:order-1 lg:order-1 col-span-3">
                        <ServiceBox />
                    </div>
                    <div className="order-1 md:order-2 lg:order-2 col-span-2 py-0 md:py-24 lg:py-24">
                        <div className="border-s-3 border-s-blue-500 md:border-0 lg:border-0 pl-4 md:pl-0 lg:pl-0">
                            <Heading className="text-lg text-left md:text-center lg:text-center">{siteData.services.heading}</Heading>
                            <Subtitle className="text-sm text-blue-lagoon-500 text-justify">{siteData.services.subtitle}</Subtitle>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;