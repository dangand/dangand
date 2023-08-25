import React from "react";

import { MetaData } from "@/components/data-display";
import RegisterModule from "@/modules/auth_module/register/ui";

const VerificationPage = () => {
  return (
    <>
      <MetaData
        title="Verifikasi Email"
        description="verifikasi email dangand"
      />
      <RegisterModule />
    </>
  );
};

export default VerificationPage;
