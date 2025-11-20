"use client";
import React from "react";

interface SubtitleProps {
    children: string;
    className: string;
}

const Subtitle = ({ children, className }: SubtitleProps) => {
    return (
        <h6 className={`font-normal font-poppins ${className}`}>{children}</h6>
    );
};

export default Subtitle;