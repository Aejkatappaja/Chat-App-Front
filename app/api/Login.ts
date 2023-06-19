import axios, { AxiosResponse } from "axios";

export type LoginType = {
  email: string;
  password: string;
};

export const Login = async ({ email, password }: LoginType) => {
  const response: AxiosResponse<LoginType> = await axios.post(
    "http://localhost:4000/login",
    { email, password }
  );
  return response.data;
};
