"use client";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

type Variant = "LOGIN" | "REGISTER";

export const AuthForm = () => {
  const [variant, setVariant] = React.useState<Variant>("REGISTER");
  const [inputPasswordVisibility, setInputPasswordVisibility] =
    React.useState<boolean>(false);
  return (
    <form
      action=""
      className={
        variant === "REGISTER"
          ? "h-[25rem] w-full pb-7 flex flex-col items-center justify-between"
          : "h-[25rem] w-full pb-7 flex flex-col items-center justify-end gap-16"
      }
    >
      {variant === "REGISTER" && (
        <Input
          htmlFor="username"
          spanTitle="Username"
          id="username"
          type="text"
        />
      )}

      <Input htmlFor="email" spanTitle="E-mail" id="email" type="email" />
      <Input
        htmlFor="password"
        spanTitle="Password"
        id="password"
        type={inputPasswordVisibility ? "text" : "password"}
        icon={
          !inputPasswordVisibility ? (
            <FaEyeSlash
              className="text-sonup text-xl"
              onClick={() =>
                setInputPasswordVisibility(!inputPasswordVisibility)
              }
            />
          ) : (
            <FaEye
              className="text-sonup text-xl"
              onClick={() =>
                setInputPasswordVisibility(!inputPasswordVisibility)
              }
            />
          )
        }
      />

      {variant === "REGISTER" && (
        <Input
          htmlFor="confirmPassword"
          spanTitle="Confirm Password"
          id="confirmPassword"
          type={inputPasswordVisibility ? "text" : "password"}
          icon={
            !inputPasswordVisibility ? (
              <FaEyeSlash
                className="text-sonup text-xl"
                onClick={() =>
                  setInputPasswordVisibility(!inputPasswordVisibility)
                }
              />
            ) : (
              <FaEye
                className="text-sonup text-xl"
                onClick={() =>
                  setInputPasswordVisibility(!inputPasswordVisibility)
                }
              />
            )
          }
        />
      )}
      <div>
        <Button className="relative">
          {variant === "LOGIN" ? "Login" : "Register"}
        </Button>
        <p
          className="absolute pt-3 text-center w-[32rem] font-base text-sonup text-sm hover:underline cursor-default"
          onClick={() => {
            variant === "LOGIN" ? setVariant("REGISTER") : setVariant("LOGIN");
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
