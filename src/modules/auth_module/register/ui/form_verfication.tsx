import React, { useEffect, useState } from "react";

type UserLogin = {
  email: string;
  password: string;
};

interface Login {
  dataUserLogin: UserLogin;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormVerification = ({ dataUserLogin, handleChange }: Login) => {
  const [inputRefs, setInputRefs] = useState<Array<HTMLInputElement | null>>(
    [],
  );
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
    if (value.length === 1) {
      focusNextInput(index);
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
      className="w-full flex flex-col max-w-lg gap-4 mx-auto"
      // onSubmit={handleSubmit}
    >
      <p className="text-center w-[90%] mx-auto text-neutral-700 text-sm lg:text-base">
        Kode verifikasi telah dikirim ke Email{" "}
        <span className="font-medium">rianlauo@gmail.com</span>
      </p>
      <div className="flex justify-center items-center">
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
      <div className="text-center text-sm">
        {countdown === 0 ? (
          <button onClick={resendEmail} className="text-blue-500 font-medium">
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
        {/* <Link href={PATH.LOGIN} className="text-blue-500 font-medium">
          Sudah punya akun
        </Link> */}
        <button className="text-white bg-indigo-500  px-5 py-2 rounded-md">
          Selanjutnya
        </button>
      </div>
    </form>
  );
};

export default FormVerification;
