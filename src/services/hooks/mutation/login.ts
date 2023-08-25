import { LOGIN } from "@/constants/endpoint";
import { API } from "@/services/api";

interface LoginType {
  email: string;
  password: string;
}

export const loginMutation = async ({ email, password }: LoginType) => {
  const data = { email, password };
  const res = await API.post(LOGIN, data);
  return res.data;
};
