import axios, { AxiosResponse } from "axios";

export type UserLoginType = {
  email: string;
  password: string;
};

export const UserLogin = async ({ email, password }: UserLoginType) => {
  const response: AxiosResponse<UserLoginType> = await axios.post(
    `http://localhost:4000/login`,
    { email, password }
  );
  return response.data;
};
