export type AuthCredentials = {
  email: string;
  password: string;
};

export interface UserDTO {
  email: string;
  password: string;
  role: string;
}
