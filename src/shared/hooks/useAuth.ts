import { AuthCredentials, UserDTO } from "entities/user/types";
import { useState } from "react";
import authService from "../service/auth.service";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearUser, setUser } from "../../store/slices/userSlice";
import { alertError } from "../api/error";

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
      alertError(err)
    } finally {
      setLoading(false);
    }
  };

  const register = async (user: UserDTO, callback: () => void) => {
    try {
      setLoading(true);
      const res = await authService.register(user);
      if (res.status === 201) {
          const token = res.data;
        dispatch(setUser({ token }));
        callback();
      }
    } catch (err) {
      alertError(err)
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    dispatch(clearUser());
  };

  return { auth, register, user, logout, loading };
};
