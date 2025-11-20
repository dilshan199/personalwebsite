"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef } from "react";
import { siteData } from "@/app/sitedata";
import ProjectCard from "../ui/ProjectCard";
import { Project } from "@/app/type";

const ProjectCarousel = () => {
    // Refs for custom buttons
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const projects: Project[] = Object.values(siteData.projects.content);

    return (
        <div className="py-5">
            <div className="slide-container w-full relative">
                <div className='slide-controllers flex justify-between absolute top-1/2 left-0 w-full px-4 items-center z-10'>
                    <button type='button' ref={prevRef} aria-label='Previous Slide' className='bg-blue-lagoon-500 hover:bg-blue-lagoon-600 rounded-full w-8 h-8 shadow-md text-white -ml-8 cursor-pointer'>
                        <span className="sr-only">Previous Slide</span>
                        <i className='bi bi-chevron-left'></i>
                    </button>
                    <button type='button' ref={nextRef} aria-label='Next Slide' className='bg-blue-lagoon-500 hover:bg-blue-lagoon-600 w-8 h-8 rounded-full -mr-8 shadow-md text-white cursor-pointer'>
                        <span className="sr-only">Next Slide</span>
                        <i className='bi bi-chevron-right'></i>
                    </button>
                </div>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,   // Mobile
                        },
                        640: {
                            slidesPerView: 3,   // Tablet
                        },
                        1024: {
                            slidesPerView: 4,   // Laptop + Desktop
                        },
                    }}
                    modules={[Navigation]}
                    spaceBetween={10}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        // Prevents the TS error by ensuring navigation is defined
                        if (
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== "boolean"
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    className="mySwiper slide-inner w-full h-auto overflow-hidden px-1 py-2"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="p-3">
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProjectCarousel;