import { SEND_VERIFY_CODE, VERIFY_CODE } from "@/constants/endpoint";
import { API } from "@/services";
import { toast } from "react-toastify";

export const sendVerifyCodeMutation = async (email: string) => {
  try {
    const data = { email: email };
    const res = await API.post(SEND_VERIFY_CODE, data);
    return res.data;
  } catch (error: any) {
    toast.error(error);
  }
};

export const verifyCodeMutation = async (email: string, code: string) => {
  try {
    const data = { email: email, code: code };
    const res = await API.post(VERIFY_CODE, data);
    console.log(res);
    if (res.data.statusCode == 200) {
      toast.success("Email berhasil di verfikasi");
    } else {
      toast.error(res.data.message);
    }
    return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error(error.response.data.message);
  }
};
