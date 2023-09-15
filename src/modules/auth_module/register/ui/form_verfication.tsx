import React, { useEffect, useState } from "react";

import UserStore from "@/store/UserStore";
import { observer } from "mobx-react";

import { verifyCodeMutation } from "../hooks/useVerificationCode";

type UserLogin = {
  email: string;
  password: string;
};

interface Login {
  dataUserLogin: UserLogin;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormVerification = observer(({ dataUserLogin, handleChange }: Login) => {
  const [inputRefs, setInputRefs] = useState<Array<HTMLInputElement | null>>(
    [],
  );
  console.log(inputRefs);
  const [verifyCode, setVerifyCode] = useState<string[]>(Array(6).fill(""));
  const code = verifyCode.join("");
  const [countdown, setCountdown] = useState(60);

  const focusNextInput = (index: number) => {
    if (inputRefs[index + 1]) {
      inputRefs[index + 1]?.focus();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (value.length === 0) {
      if (index > 0 && inputRefs[index - 1]) {
        inputRefs[index - 1]?.focus();
      }
    }

    const newVerifyCode = [...verifyCode];
    newVerifyCode[index] = value;
    setVerifyCode(newVerifyCode);

    if (value.length === 1) {
      focusNextInput(index);
    }

    if (value.length === 0) {
      if (index > 0 && inputRefs[index - 1]) {
        inputRefs[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (UserStore.userData.email !== undefined) {
      await verifyCodeMutation(UserStore.userData.email, code);
    }
  };

  const resendEmail = () => {
    setCountdown(60);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      if (timer) {
        clearInterval(timer);
      }
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [countdown]);

  return (
    <form
      className="flex flex-col w-full max-w-lg gap-4 mx-auto"
      onSubmit={handleSubmit}
    >
      <p className="text-center w-[90%] mx-auto text-neutral-700 text-sm lg:text-base">
        Kode verifikasi telah dikirim ke Email{" "}
        <span className="font-medium">{UserStore.userData.email}</span>
      </p>
      <div className="flex items-center justify-center">
        <div className="space-x-2">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <input
              key={index}
              ref={(input) => {
                inputRefs[index] = input;
              }}
              className="w-12 h-12 text-center border rounded-md"
              type="text"
              maxLength={1}
              onChange={(e) => handleInputChange(e, index)}
            />
          ))}
        </div>
      </div>
      <div className="text-sm text-center">
        {countdown === 0 ? (
          <button onClick={resendEmail} className="font-medium text-blue-500">
            Kirim email lagi
          </button>
        ) : (
          <p className="text-neutral-500">
            Mohon tunggu{" "}
            <span className="font-medium text-neutral-700">
              {countdown} detik
            </span>{" "}
            lagi untuk kirim ulang
          </p>
        )}
      </div>

      <div className="flex items-center justify-end mt-5 text-sm">
        {/* <Link href={PATH.LOGIN} className="font-medium text-blue-500">
            Sudah punya akun
          </Link> */}
        <button
          type="submit"
          className="px-5 py-2 text-white bg-indigo-500 rounded-md"
        >
          Verifikasi
        </button>
      </div>
    </form>
  );
});

export default FormVerification;
