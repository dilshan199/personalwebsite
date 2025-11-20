"use client";
import React from "react";
import Icon from "./Icon";
import ContactDetails from "./ContactDetails";
import { siteData } from "@/app/sitedata";
import Link from "next/link";

const ContactBox = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
            <div>
                <div className="flex items-center justify-start space-x-5 mb-8">
                    <Icon name="bi bi-geo-alt-fill" />
                    <ContactDetails title="Address" detail={siteData.contact.address} />
                </div>
                <div className="flex items-center justify-start space-x-5 mb-8">
                    <Icon name="bi bi-telephone-fill" />
                    <ContactDetails title="Contact No" detail={siteData.contact.phone} />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-start space-x-5 mb-8">
                    <Icon name="bi bi-envelope-fill" />
                    <ContactDetails title="Contact No" detail={siteData.contact.email} />
                </div>
                <div className="flex items-center justify-start space-x-5 mb-8">
                    <Icon name="bi bi-hand-thumbs-up-fill" />
                    <ContactDetails title="Social Media" detail="" />
                </div>
            </div>
            <div>
                <h6 className="text-base font-poppins font-medium">Ready to Start Your Next Project?</h6>
                <p className="mt-3 text-sm text-gray-500 font-normal">I&apos;m available for freelance work, long-term projects, or part-time remote roles.
          Tell me your idea — let’s build something amazing together.</p>
                <div className="flex items-center space-x-3 mt-3">
                    <Link href="#" className="shadow-md bg-blue-lagoon-500 text-sm rounded-md text-white hover:bg-blue-lagoon-400 px-8 py-2 transition duration-200">Hire Me</Link>
                    <Link href="your-cv.pdf" download={true} className="border border-blue-lagoon-500 text-sm px-8 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-lagoon-600 transition duration-200 ">Download CV</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactBox;