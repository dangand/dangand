"use client";

import React from "react";

import { Hero } from "./hero";
import { NavbarLandingPage } from "./navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

export const LandingPage = () => {
  return (
    <main className="homepage">
      <NavbarLandingPage />
      <Hero />
      <div className="px-4 lg:px-0 xl:max-w-screen-xl xl:px-8 mx-auto 2xl:max-w-screen-xl">
        <Section2 />
        <Section1 />
      </div>
      <Section3 />
    </main>
  );
};
