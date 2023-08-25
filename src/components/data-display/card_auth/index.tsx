import React from "react";

import { DangandIconPrimary, GoogleIcon } from "@/assets/svg";

type Props = {
  title: string;
  subTitle?: string;
  googleLogin?: boolean;
  children: React.ReactNode;
};

const CardAuth = (props: Props) => {
  const { title, subTitle, googleLogin = true, children } = props;
  return (
    <div
      id="cardContainer"
      className="cardContainer relative overflow-hidden flex flex-col gap-5 border border-neutral-300 rounded-lg p-6 lg:p-8"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <DangandIconPrimary width={35} height={35} />
          <h3 className="text-base lg:text-lg font-semibold ">Dangand</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-medium lg:text-2xl">{title}</h1>
          {subTitle ? (
            <p className="w-full text-center text-sm text-neutral-600">
              {subTitle}
            </p>
          ) : (
            <></>
          )}
        </div>
        {googleLogin ? (
          <>
            <button className="text-sm w-full flex justify-center items-center gap-2 text-neutral-900 px-5 py-2 border border-neutral-300 rounded-lg lg:text-base lg:px-6 lg:py-3 ">
              <GoogleIcon />
              Masuk Dengan Google
            </button>

            <p className="w-full text-center text-xs lg:text-base">
              Atau Gunakan Akun Dangand
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
      {children}
    </div>
  );
};

export default CardAuth;
