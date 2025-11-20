"use client";
import React from "react";

interface IconProps {
    name: string;
}

const Icon = ({name}: IconProps) => {
    return (
        <div className="w-8 h-8 rounded-full bg-blue-lagoon-500 text-white shadow-md flex items-center justify-center">
            <i className={`${name} text-lg`}></i>
        </div>
    );
};

export default Icon;