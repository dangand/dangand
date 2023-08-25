import React from "react";

import { MetaData } from "@/components/data-display";
import { LandingPage } from "@/modules/landing_page_module";

function index() {
  return (
    <>
      <MetaData
        title="Dangand | Digital Invitation"
        description="Undangan digital dengan AI, buat undangan dengan cepat, mudah dan efisien"
      />
      <LandingPage />
    </>
  );
}

export default index;
