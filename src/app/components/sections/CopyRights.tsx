"use client";
import { siteData } from "@/app/sitedata";
import React from "react";

const CopyRights = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="max-w-screen">
            <div className="max-w-6xl mx-auto px-4 md:px-4 lg:px-0 py-6">
                <p className="text-xs font-poppins font-normal text-gray-500 text-center">{siteData.name} &copy; {currentYear}. All rights recerved.</p>
            </div>
        </div>
    );
};

export default CopyRights;