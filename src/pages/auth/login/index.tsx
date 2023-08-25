import React from "react";

import { MetaData } from "@/components/data-display";
import LoginModule from "@/modules/auth_module/login/ui";

const LoginPage = () => {
  return (
    <>
      <MetaData
        title="Login Dangand"
        description="login Dangand, undangan digital dengan AI"
      />
      <LoginModule />
    </>
  );
};

export default LoginPage;
