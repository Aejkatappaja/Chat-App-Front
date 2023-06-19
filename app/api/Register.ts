import axios, { AxiosResponse } from "axios";

export type UserRegisterType = {
  email: string;
  username: string;
  password: string;
};

export const UserRegister = async ({
  email,
  username,
  password,
}: UserRegisterType) => {
  const response: AxiosResponse<UserRegisterType> = await axios.post(
    `http://localhost:4000/register`,
    { email, username, password }
  );
  return response.data;
};
