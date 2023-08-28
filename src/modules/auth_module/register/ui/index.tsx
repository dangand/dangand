import { useRouter } from "next/router";
import React, { useState } from "react";

import CardAuth from "@/components/data-display/card_auth";
import FooterAuth from "@/components/data-display/footer_auth";
import TextInput from "@/components/input/text_input";
import { PATH } from "@/constants/path";
import NProgress from "nprogress";

import { useRegisterForm } from "../hooks/useRegisterForm";
import FormRegister from "./form_register";
import FormVerification from "./form_verfication";

import type { USER_REGISTER } from "@/types";

const RegisterModule = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isLoading, setIsLoading] = useState(false);
  const { handleOnSubmit } = useRegisterForm();

  const [dataUser, setDataUser] = useState<USER_REGISTER>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleStart = () => {
    NProgress.configure({ parent: "#cardContainer", showSpinner: false });
    NProgress.start();
  };
  const handleStop = () => {
    NProgress.done();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleStart();
    NProgress.set(0.0);
    NProgress.set(0.3);
    NProgress.set(0.5);
    NProgress.set(0.7);
    await handleOnSubmit(dataUser);
  };

  const handleNextStep = () => {
    handleStart();
    router.push(PATH.REGISTER_VERIFICATION);
    handleStop();
  };

  const handleBackToLogin = () => {
    handleStart();
    router.push(PATH.LOGIN);
    handleStop();
  };

  const generateSubTitle = () => {
    switch (currentPath) {
      case PATH.REGISTER:
        return "Masukan nama dan email kamu";
      case PATH.REGISTER_VERIFICATION:
        return "Verifikasi email kamu";
    }
  };

  const generateForm = () => {
    switch (currentPath) {
      case PATH.REGISTER:
        return (
          <FormRegister
            dataUser={dataUser}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handleBackToLogin={handleBackToLogin}
            handleSubmit={handleSubmit}
          />
        );
      case PATH.REGISTER_VERIFICATION:
        return (
          <FormVerification
            dataUserLogin={dataUser}
            handleChange={handleChange}
          />
        );
    }
  };

  return (
    <main className="flex items-center justify-center w-full h-screen pt-20 pb-10 bg-white">
      <section className="w-full max-w-md px-4 mx-auto lg:px-0">
        <CardAuth
          title="Buat Akun Dangand"
          subTitle={generateSubTitle()}
          googleLogin={false}
        >
          {generateForm()}
        </CardAuth>
        <FooterAuth />
      </section>
    </main>
  );
};

export default RegisterModule;
