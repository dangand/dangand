import { useRouter } from "next/router";
import { useState } from "react";

import { LOGIN, REGISTER } from "@/constants/endpoint";
import { PATH } from "@/constants/path";
import { API } from "@/services/api";
import useMutationHook from "@/services/hooks/useMutationHook";
import UserStore from "@/store/UserStore";
import Cookies from "js-cookie";
import NProgress from "nprogress";
import { toast } from "react-toastify";

import { sendVerifyCodeMutation } from "./useVerificationCode";

import type { USER_REGISTER } from "@/types";

const handleStop = () => {
  NProgress.done();
};

export const registerMutation = async ({
  name,
  email,
  phone,
  password,
}: USER_REGISTER) => {
  const data = { name, email, phone, password };
  const res = await API.post(REGISTER, data);
  if (res.data.statusCode == 201) {
    await sendVerifyCodeMutation(res.data.user.email);
    UserStore.setUser({ email: res.data.user.email });
  }
  console.log(res.data);
  return res.data;
};

export const useRegisterForm = () => {
  const router = useRouter();

  const mutationQueryRegister = useMutationHook({
    api: registerMutation,
    options: {
      onSuccess: (res: any) => {
        console.log(res);
        toast.success("Register berhasil");
        router.push(PATH.REGISTER_VERIFICATION);
        handleStop();
        NProgress.remove;
      },
    },
  });

  const handleOnSubmit = async ({
    name,
    email,
    password,
    phone,
  }: USER_REGISTER) => {
    mutationQueryRegister.mutate({
      name,
      email,
      phone,
      password,
    });
  };

  return {
    mutationQueryRegister,
    handleOnSubmit,
  };
};
