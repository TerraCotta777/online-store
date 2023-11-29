import { UserDTO } from "entities/user/types";
import { AuthCredentials } from "entities/user/types";
import endpoints from "../api/endpoints";
import api from "../api";

export default {
  login(credentials: AuthCredentials) {
    const url = endpoints().auth.login;
    return api.post(url, credentials);
  },
  register(userForm: UserDTO) {
    const url = endpoints().auth.register;
    return api.post(url, userForm);
  },
};
