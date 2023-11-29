import { AuthCredentials } from "entities/user/types";
import { useState } from "react";
import authService from "../service/auth.service";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearUser, setUser } from "../../store/slices/userSlice";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const auth = async (credentials: AuthCredentials, callback: () => void) => {
    try {
      setLoading(true);
      const res = await authService.login(credentials);
      if (res.status === 200) {
          const token = res.data.data.token;
        dispatch(setUser({ token }));
        callback();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    dispatch(clearUser());
  };

  return { auth, user, logout, loading };
};
