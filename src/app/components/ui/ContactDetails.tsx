"use client";
import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

interface ContactDetailsProps {
    title: string;
    detail: string | '';
}

const ContactDetails = ({title, detail}: ContactDetailsProps) => {
    return (
        <div>
            <h6 className="font-medium font-poppins text-sm mb-3">{title}</h6>
            {detail && detail.length > 0 ? <p className="text-sm font-normal font-poppins text-gray-500">{detail}</p> : SocialMediaLinks()}
        </div>
    );
};

export default ContactDetails;