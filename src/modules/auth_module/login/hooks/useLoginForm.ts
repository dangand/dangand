import { useRouter } from "next/router";

import { LOGIN } from "@/constants/endpoint";
import { BASE_DASHBOARD_URL, PATH } from "@/constants/path";
import { API } from "@/services/api";
import useMutationHook from "@/services/hooks/useMutationHook";
import UserStore from "@/store/UserStore";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import type { USER_LOGIN } from "@/types";

export const loginMutation = async ({ email, password }: USER_LOGIN) => {
  const data = { email, password };
  const res = await API.post(LOGIN, data);
  UserStore.setUser({ accessToken: res.data.accessToken });
  return res.data;
};

export const useLoginForm = () => {
  const router = useRouter();
  const mutationQueryLogin = useMutationHook({
    api: loginMutation,
    options: {
      onSuccess: (res: any) => {
        // const { register_as } = res.data.user;
        // if (!ROLE.includes(register_as)) {
        //   toast.error("Anda tidak memiliki akses!");
        //   return;
        // }
        Cookies.set("dangand_access_token", res.accessToken);
        toast.success("Berhasil Login");
        router.push(BASE_DASHBOARD_URL + `?token=${res.accessToken}`);
        return;
      },
    },
  });

  const handleOnSubmit = async (email: string, password: string) => {
    mutationQueryLogin.mutate({
      email,
      password,
    });
  };

  return {
    mutationQueryLogin,
    handleOnSubmit,
  };
};
