import { LOGIN } from "@/constants/endpoint";
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
  console.log(UserStore.userData.accessToken);
  return res.data;
};

export const useLoginForm = () => {
  const mutationQueryLogin = useMutationHook({
    api: loginMutation,
    options: {
      onSuccess: (res: any) => {
        // const { register_as } = res.data.user;
        // if (!ROLE.includes(register_as)) {
        //   toast.error("Anda tidak memiliki akses!");
        //   return;
        // }
        // Cookies.set("access_token", res.data.access_token);

        // dataUser.setUser(res.data.user);
        toast.success("Berhasil Login");
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
