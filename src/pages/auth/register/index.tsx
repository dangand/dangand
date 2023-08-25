import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { MetaData } from "@/components/data-display";
import RegisterModule from "@/modules/auth_module/register/ui";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <>
      <MetaData
        title="Register Dangand"
        description="login Dangand, undangan digital dengan AI"
      />
      <RegisterModule />
    </>
  );
};

export default RegisterPage;
