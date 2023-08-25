import Link from "next/link";
import React from "react";

import TextInput from "@/components/input/text_input";
import { PATH } from "@/constants/path";

import type { USER_REGISTER } from "@/types";

interface Login {
  dataUser: USER_REGISTER;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  handleBackToLogin: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormRegister = ({
  dataUser,
  handleChange,
  handleBackToLogin,
  handleSubmit,
}: Login) => {
  return (
    <form
      className="w-full flex flex-col max-w-lg gap-4 mx-auto"
      onSubmit={handleSubmit}
    >
      <TextInput
        label="Nama"
        type="text"
        name="name"
        required
        placeholder="Masukan nama kamu"
        value={dataUser?.name}
        onChange={(e) => handleChange(e)}
      />

      <TextInput
        label="Email"
        type="email"
        name="email"
        required
        placeholder="Cth: emailkamu@gmail.com"
        value={dataUser?.email}
        onChange={(e) => handleChange(e)}
      />

      <TextInput
        label="Password"
        type="password"
        name="password"
        required
        placeholder="Buat password kamu"
        value={dataUser?.password}
        onChange={(e) => handleChange(e)}
      />

      <div className="flex items-center justify-between mt-3 text-xs lg:text-sm">
        <button
          type="button"
          onClick={handleBackToLogin}
          className="text-blue-500 font-medium"
        >
          Sudah punya akun
        </button>
        <button className="text-white bg-indigo-500  px-5 py-2 rounded-md">
          Selanjutnya
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
