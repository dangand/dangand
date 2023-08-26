import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { DangandIconPrimary, GoogleIcon } from "@/assets/svg";
import CardAuth from "@/components/data-display/card_auth";
import FooterAuth from "@/components/data-display/footer_auth";
import LoadingTop from "@/components/data-display/loading-top";
import { BaseButton } from "@/components/input";
import TextInput from "@/components/input/text_input";
import { PATH } from "@/constants/path";
import NProgress from "nprogress";

import { useLoginForm } from "../hooks/useLoginForm";

type UserLogin = {
  email: string;
  password: string;
};

const LoginModule = () => {
  const router = useRouter();

  const { handleOnSubmit } = useLoginForm();
  const [dataUserLogin, setDataUserLogin] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUserLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleOnSubmit(dataUserLogin.email, dataUserLogin.password);
  };

  const handleStart = () => {
    NProgress.configure({ parent: "#cardContainer", showSpinner: false });
    NProgress.start();
  };
  const handleStop = () => {
    NProgress.done();
  };
  const handleNextStep = () => {
    handleStart();
    router.push(PATH.REGISTER);
    handleStop();

    // NProgress.set(0.0);
    // NProgress.set(0.4);
    // setTimeout(() => {
    //   NProgress.set(0.6);
    //   NProgress.set(0.9);
    // }, 500);
    // setTimeout(() => {
    //   NProgress.set(1.0);
    // }, 1000);
  };

  return (
    <main className="w-full flex items-center justify-center h-screen bg-white pt-20 pb-10 px-4 md:px-0">
      <section className="w-full max-w-md mx-auto">
        <CardAuth title="Login">
          <form
            className="w-full flex flex-col max-w-lg gap-4 mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <TextInput
                label="Email"
                type="text"
                name="email"
                required
                placeholder="Contoh: emailkamu@gmail.com"
                value={dataUserLogin?.email}
                onChange={(e) => handleChange(e)}
              />
              <TextInput
                label="Password"
                type="password"
                name="password"
                required
                placeholder="Masukan password"
                value={dataUserLogin?.password}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="flex items-center justify-between mt-3 text-xs lg:text-sm">
              <button
                type="button"
                onClick={handleNextStep}
                className="text-blue-500 font-medium"
              >
                Buat akun
              </button>
              <button className="text-white bg-indigo-500  px-5 py-2 rounded-md">
                Selanjutnya
              </button>
            </div>
          </form>
        </CardAuth>

        <FooterAuth />
      </section>
    </main>
  );
};

export default LoginModule;
