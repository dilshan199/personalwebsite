"use client";
import React from "react";
import Link from "next/link";

interface DemoLinkProps {
    url: string;
}

const DemoLink = ({ url }: DemoLinkProps) => {
    return (
        <Link href={url} className='text-white text-sm font-semibold font-poppins bg-blue-lagoon-500 hover:bg-blue-lagoon-600 rounded-full px-3 py-2 text-center flex items-center justify-center'>View Demo</Link>
    );
};

export default DemoLink;