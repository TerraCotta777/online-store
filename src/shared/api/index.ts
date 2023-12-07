import axios, { AxiosInstance } from "axios";
import store from "../../store";
import { clearUser } from "../../store/slices/userSlice";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${store.getState()?.user?.token}`,
  },
});

api.interceptors.request.use(async (config) => {
  const token = store.getState().user.token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const { config } = error;

    if (error.response.status === 401) {
      if (!config.retry) {
        console.log(401);
        config.retry = true;
        delete api.defaults.headers.common.Authorization;
        store.dispatch(clearUser());
      }
    }

    return Promise.reject(error);
  }
);

export default api;
