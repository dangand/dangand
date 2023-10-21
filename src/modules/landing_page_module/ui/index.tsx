"use client";

import React from "react";

import { Hero } from "./hero";
import { NavbarLandingPage } from "./navbar";
import SectionCardPrice from "./sectionCardPrice";
import SectionFooter from "./sectionFooter";
import SectionInfo from "./sectionInfo";
import SectionInvitationStep from "./sectionInvitationStep";
import SectionSolution from "./sectionSolution";
import SectionTestimoni from "./sectionTestimoni";
import SectionVideo from "./sectionVideo";

export const LandingPage = () => {
  return (
    <main className="homepage">
      <NavbarLandingPage />
      <Hero />
      <SectionVideo />
      <SectionInfo />
      <SectionInvitationStep />
      <SectionSolution />
      <SectionCardPrice />
      <SectionTestimoni />
      <SectionFooter />
      {/* <Footer /> */}
      {/* <div className="px-4 mx-auto lg:px-0 xl:max-w-screen-xl xl:px-8 2xl:max-w-screen-xl"> */}
      {/* <Section2 />
      <Section1 /> */}
      {/* </div> */}
      {/* <Section3 />
      <Section4 /> */}
    </main>
  );
};
