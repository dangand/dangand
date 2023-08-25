import { useRouter } from "next/router";
import { useState } from "react";

import { LOGIN, REGISTER } from "@/constants/endpoint";
import { PATH } from "@/constants/path";
import { API } from "@/services/api";
import useMutationHook from "@/services/hooks/useMutationHook";
import Cookies from "js-cookie";
import NProgress from "nprogress";
import { toast } from "react-toastify";

import type { USER_REGISTER } from "@/types";

export const registerMutation = async ({
  name,
  email,
  phone,
  password,
}: USER_REGISTER) => {
  const data = { name, email, phone, password };
  const res = await API.post(REGISTER, data);
  return res.data;
};

const handleStart = () => {
  NProgress.configure({ parent: "#cardContainer", showSpinner: false });
  NProgress.start();
};

const handleStop = () => {
  NProgress.done();
};

export const useRegisterForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const mutationQueryRegister = useMutationHook({
    api: registerMutation,
    options: {
      onSuccess: (res: any) => {
        toast.success("Register berhasil");
        router.push(PATH.REGISTER_VERIFICATION);
        handleStop();
        NProgress.remove;
      },
      onError: (res: any) => {
        setError(res);
      },
    },
  });

  const handleOnSubmit = async ({
    name,
    email,
    password,
    phone,
  }: USER_REGISTER) => {
    // setError(null);
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
    error,
  };
};
