"use client";
import React from "react";
import Heading from "../ui/Heading";
import Subtitle from "../ui/Subtitile";
import { siteData } from "@/app/sitedata";
import ContactBox from "../ui/ContactBox";

const Contact = () => {
    return (
        <div className="max-w-screen h-auto bg-[url('/images/map.jpg')] bg-no-repeat bg-center bg-cover" id="Contact">
            <div className="max-w-6xl mx-auto h-auto px-4 md:px-4 lg:px-0 py-3">
                <Heading className="text-lg text-center">{siteData.contact.heading}</Heading>
                <Subtitle className="text-sm text-blue-lagoon-500 text-center mt-2">{siteData.contact.subtitle}</Subtitle>
                <ContactBox />
            </div>
        </div>
    );
};

export default Contact;