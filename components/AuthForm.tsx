"use client";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { toast } from "react-hot-toast";
import { UserLogin } from "@/api/Login";
import { Spinner } from "./ui/Spinner";
import { UserRegister } from "@/api/Register";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

export const AuthForm = () => {
  const router = useRouter();
  const [variant, setVariant] = React.useState<Variant>("REGISTER");
  const [inputPasswordVisibility, setInputPasswordVisibility] =
    React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleUserLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!email || !password) {
        toast.error(`You must fill all inputs!`);
        return;
      }
      const response = await UserLogin({ email: email, password: password });
      toast.success("Online");
      setIsLoading(false);
      router.push("/sdfs");
    } catch (error: any) {
      console.error({ message: error.message });
      toast.error("Error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!email || !password || !username) {
        toast.error(`You must fill all inputs!`);
        return;
      }
      if (password !== passwordConfirm) {
        toast.error("Passwords doesn't match");
        return;
      }
      const response = await UserRegister({
        email: email,
        password: password,
        username: username,
      });
      toast.success("Registered");
    } catch (error: any) {
      console.error({ message: error.message });
      toast.error("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <div className="h-[25rem] w-full pb-7 flex flex-col items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <form
      action=""
      onSubmit={variant === "LOGIN" ? handleUserLogin : handleUserRegister}
      className={
        variant === "REGISTER"
          ? "h-[25rem] w-full pb-7 flex flex-col items-center justify-between"
          : "h-[25rem] w-full pb-7 flex flex-col items-center justify-end gap-6"
      }
    >
      {variant === "LOGIN" && (
        <div className="flex items-center font-bold text-xl w-[32rem] tracking-widest text-sonup justify-center gap-5 pb-6">
          <div>
            Try out our experimental
            <span className="text-orange"> chat app</span>
          </div>
          <Image src="/chat-logo.png" alt="sonup-logo" width={80} height={50} />
        </div>
      )}
      {variant === "REGISTER" && (
        <Input
          onChange={(e) => setUsername(e.target.value)}
          htmlFor="username"
          spanTitle="Username"
          id="username"
          type="text"
        />
      )}

      <Input
        htmlFor="email"
        spanTitle="E-mail"
        id="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        htmlFor="password"
        spanTitle="Password"
        id="password"
        type={inputPasswordVisibility ? "text" : "password"}
        icon={
          !inputPasswordVisibility ? (
            <FaEyeSlash
              className="text-sonup text-xl absolute right-4"
              onClick={() =>
                setInputPasswordVisibility(!inputPasswordVisibility)
              }
            />
          ) : (
            <FaEye
              className="text-sonup text-xl absolute right-4"
              onClick={() =>
                setInputPasswordVisibility(!inputPasswordVisibility)
              }
            />
          )
        }
      />

      {variant === "REGISTER" && (
        <Input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          htmlFor="confirmPassword"
          spanTitle="Confirm Password"
          id="confirmPassword"
          type={inputPasswordVisibility ? "text" : "password"}
          icon={
            !inputPasswordVisibility ? (
              <FaEyeSlash
                className="text-sonup text-xl absolute right-4"
                onClick={() =>
                  setInputPasswordVisibility(!inputPasswordVisibility)
                }
              />
            ) : (
              <FaEye
                className="text-sonup text-xl absolute right-4"
                onClick={() =>
                  setInputPasswordVisibility(!inputPasswordVisibility)
                }
              />
            )
          }
        />
      )}
      <div>
        <Button className="relative" type="submit" disabled={isLoading}>
          {variant === "LOGIN" ? "Login" : "Register"}
        </Button>
        <p
          className="absolute pt-3 text-center w-[32rem] font-base text-sonup text-sm hover:underline cursor-default"
          onClick={() => {
            {
              variant === "LOGIN"
                ? setVariant("REGISTER")
                : setVariant("LOGIN");
            }
          }}
        >
          {variant === "LOGIN"
            ? "Don't have an account yet? Register!"
            : "Already have an account? Login!"}
        </p>
      </div>
    </form>
  );
};
