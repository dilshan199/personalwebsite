"use client";
import React from "react";
import Heading from "../ui/Heading";
import { siteData } from "@/app/sitedata";
import Subtitle from "../ui/Subtitile";
import ProjectCarousel from "../carousel/ProjectCarousel";

const Projects = () => {
    return (
        <div className="max-w-screen" id="Projects">
            <div className="max-w-6xl mx-auto px-4 md:px-4 lg:px-0">
                <div className="w-full py-2 border-s-3 border-s-blue-lagoon-500 pl-3">
                    <Heading className="text-lg">{siteData.projects.heading}</Heading>
                    <Subtitle className="text-sm text-blue-lagoon-500 mt-2">{siteData.projects.subtitle}</Subtitle>
                </div>
                <ProjectCarousel />
            </div>
        </div>
    );
};

export default Projects;