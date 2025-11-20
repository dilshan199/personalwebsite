"use client";
import React from 'react';

interface HeadingProps {
    children: string;
    className: string
}

const Heading = ({children, className}: HeadingProps) => {
    return (
        <h4 className={`font-bold font-poppins ${className}`}>{children}</h4>
    );
};

export default Heading;