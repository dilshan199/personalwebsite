"use client";
import { siteData } from "@/app/sitedata";
import React, {useState} from "react";

const ServiceBox = () => {

    const [activeIndex] = useState(0);
    
    const services  = [
        { name: siteData.services.service1.name, text: siteData.services.service1.text, icon: "bi bi-bar-chart"},
        { name: siteData.services.service2.name, text: siteData.services.service2.text, icon: "bi bi-code-slash"},
        { name: siteData.services.service3.name, text: siteData.services.service3.text, icon: "bi bi-briefcase"},
        { name: siteData.services.service4.name, text: siteData.services.service4.text, icon: "bi bi-gear"},
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mt-5 md:mt-0 lg:mt-0">
            {services.map((service, index) => (
                <div key={index} className={`rounded-md shadow-lg px-4 py-4 font-poppins ${activeIndex == index ? 'bg-blue-lagoon-500' : 'bg-white'}`}>
                    <div className="block lg:flex items-center justify-start space-x-3">
                        <div className="mb-5 lg:mb-0">
                            <div className={`rounded-full w-10 h-10 flex items-center justify-center ${activeIndex === index ? 'bg-white' : 'bg-blue-lagoon-500'}`}>
                                <i className={`${service.icon} text-xl ${activeIndex == index ? 'text-blue-lagoon-500' : 'text-white'}`}></i>
                            </div>
                        </div>
                        <div>
                            <h5 className={`text-base font-semibold ${activeIndex == index ? 'text-white' : 'text-blue-lagoon-500'}`}>{service.name}</h5>
                            <p className={`text-sm font-normal ${activeIndex == index ? 'text-white' : 'text-gray-500'}`}>{service.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceBox;