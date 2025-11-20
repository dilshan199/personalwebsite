"use client";
import React from "react";

interface ProjectTagProps {
    tag: string;
}

const ProjectTag = ({ tag }: ProjectTagProps) => {
    return (
        <span className="bg-blue-lagoon-500 text-white text-xs font-normal font-poppins absolute top-2 left-2 rounded-full px-1 py-1">{tag}</span>
    );
};

export default ProjectTag;