"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/app/sitedata";

const SocialMediaLinks = () => {

    const socialMedias = [
        { name: "Facebook", url: siteData.contact.socialMedia.facebook, icon: "/images/fb.png" },
        { name: "Instagram", url: siteData.contact.socialMedia.instagram, icon: "/images/ins.png" },
        { name: "Linkedin", url: siteData.contact.socialMedia.linkedin, icon: "/images/linkedin.png" },
        { name: "x", url: siteData.contact.socialMedia.x, icon: "/images/x.jpg" },
    ];

    return (
        <ul className="flex items-center justify-start space-x-4">
            {socialMedias.map((media, index) => (
                <li key={index}>
                    <Link href={media.url}>
                        <Image src={media.icon} alt={media.name} width={20} height={20}></Image>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialMediaLinks;