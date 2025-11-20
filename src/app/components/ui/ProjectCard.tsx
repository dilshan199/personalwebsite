"use client";
import React from "react";
import Image from "next/image";
import ProjectTag from "./ProjectTag";
import DemoLink from "./DemoLink";
import { Project } from "@/app/type";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="slide-item h-auto bg-white rounded-md shadow-md">
            <div className="w-full h-40 relative">
                <Image src={project.imageUrl} alt={project.name} width={100} height={100} className="w-full h-full rounded-t-md"></Image>
                <ProjectTag tag={project.Tag} />
            </div>
            <div className="p-3">
                <h6 className="font-semibold font-poppins text-base mb-3">{project.name}</h6>
                <p className="text-sm font-normal font-poppins text-gray-500 mb-3">{project.description}</p>
                <DemoLink url={project.link} />
            </div>
        </div>
    );
};

export default ProjectCard;