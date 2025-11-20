"use client";
import { useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
    { path: "/images/laravel.png", alt: "Laravel" },
    { path: "/images/react.png", alt: "React" },
    { path: "/images/nextjs.png", alt: "Next.js" },
    { path: "/images/php.png", alt: "php" },
    { path: "/images/tailwindcss.png", alt: "Tailwind CSS" },
    { path: "/images/mysql.png", alt: "MySQL" },
    { path: "/images/figma.png", alt: "Figma" },
    { path: "/images/lucidchart.png", alt: "Lucidchart" },
];

const TechnologyCarousel = () => {
    const [isPaused, setIsPaused] = useState(false);

    const loopTechnologies = [...technologies, ...technologies]; // Duplicate logos for seamless looping

    return (
        <motion.div 
            className="flex items-center justify-start space-x-10 px-4 md:px-0 lg:px-0 py-5 overflow-hidden min-w-max"
            animate = {isPaused ? {} : { x: ["0%", "-50%"] }}
            transition={{
                ease: "linear",
                duration: 50, // slower = smoother
                repeat: Infinity,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {loopTechnologies.map((logo, index) => (
                <Image key={index} src={logo.path} alt={logo.alt} width={100} height={100} className="h-auto flex-shrink-0"></Image>
            ))}
        </motion.div>
    );
};

export default TechnologyCarousel;