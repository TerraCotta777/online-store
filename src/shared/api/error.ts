import { AxiosError } from "axios";
import { toast } from "../libs/toast";

type ErrorType = {
  data?: any;
  error: { message: string };
};

export const alertError = (err: AxiosError<ErrorType> | string | unknown) => {
  if (typeof err === "string") return toast(err, { type: "error" });
  if (err instanceof AxiosError && err.response?.data?.error)
    return toast(`${err.response?.data.error.message}`, { type: "error" });
  toast("Что-то пошло не так!", {
    type: "error",
  });
};
