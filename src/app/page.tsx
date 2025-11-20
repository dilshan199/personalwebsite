"use client";
import React, { useEffect } from "react";
import HeaderSection from "./components/sections/Header";
import AboutSection from "./components/sections/About";
import ServiceSection from "./components/sections/Services";
import CompanySection from "./components/sections/Company";
import ContactSection from "./components/sections/Contact";
import CopyRights from "./components/sections/CopyRights";
import { Element } from 'react-scroll';
import TechnologySection from "./components/sections/Technology";
import ProjectSection from "./components/sections/Projects"
import ReviewSection from "./components/sections/Reveiw";
import { Link, scrollSpy } from 'react-scroll';

export default function HomePage() {
  useEffect(() => {
    // ensures spy positions are calculated after mount/images load
    scrollSpy.update();
  }, []);

  return (
    <div className=" max-w-screen mx-auto h-screen" id="mainScroll">
      <Element name="Home">
        <HeaderSection />
      </Element>
      <Element name="aboutMe">
        <AboutSection />
      </Element>
      <Element name="WqhatIDo">
        <ServiceSection />
      </Element>
      <Element name="Company">
        <CompanySection />
      </Element>
      <TechnologySection />
      <Element name="Projects">
        <ProjectSection />
      </Element>
      <Element name="review">
        <ReviewSection />
      </Element>
      <Element name="Contact">
        <ContactSection />
      </Element>
      <CopyRights />

      <Link to="Home" smooth={true} duration={500} spy={true} className="fixed right-5 bottom-14 bg-blue-lagoon-500 text-white cursor-pointer shadow-md rounded-full w-10 h-10 flex items-center justify-center">
        <i className="bi bi-chevron-up"></i>
      </Link>
    </div>
  );
}