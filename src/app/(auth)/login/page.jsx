"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import regpic from "../../../../public/register1.webp";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GoSignIn } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signIn.email({
      email: loginData.email,
      password: loginData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login is Successfully Complete");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
   <div className="container mx-auto my-5 px-4">
  <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10">
       {/* Picture Section */}
<div className="hidden lg:block w-full max-w-lg">
  <Image
    className="h-auto w-full rounded-2xl"
    src={regpic}
    alt="register-pic"
    width={500}
    height={500}
    priority
  />
</div>

        {/* Form Section */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          {/* Header */}
          <div className="rounded-t-2xl bg-linear-to-r from-green-600 to-emerald-700 px-4 py-8 text-center sm:px-6 md:px-8 md:py-10">
            <h1 className="flex items-center justify-center gap-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              <GoSignIn />
              Sign in Your Account
            </h1>

            <p className="mt-2 font-semibold text-gray-300">
              Stay with Sportnest
            </p>
          </div>

          {/* Form */}
          <Form
            className="flex w-full flex-col gap-4 space-y-1 rounded-b-3xl border-2 p-4 md:p-6"
            onSubmit={handleLogin}
          >
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-lg font-semibold">Email</Label>

              <Input
                placeholder="john@example.com"
                className="
                  border-2 border-green-500 p-3
                  focus-within:border-green-500
                  focus-within:ring-green-500
                  data-[focused=true]:border-green-500
                "
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              className="w-full"
              isRequired
              name="password"
              minLength={8}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="text-lg font-semibold">Password</Label>

              <InputGroup
                className="
                  border-2 border-green-500
                  focus-within:border-green-500
                  focus-within:ring-green-500
                  data-[focused=true]:border-green-500
                "
              >
                <InputGroup.Input
                  placeholder="Password"
                  className="w-full p-3"
                  type={isVisible ? "text" : "password"}
                />

                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>

            {/* Submit Button */}
            <div className="w-full">
              <Button
                className="w-full bg-green-600 p-5 text-base font-bold md:p-6 md:text-lg"
                type="submit"
              >
                <GoSignIn />
                Sign in
              </Button>
            </div>
          </Form>

          {/* Google Login */}
          <div className="my-3 space-y-3 text-center">
            <p className="font-semibold text-gray-600">or continue with</p>

            <button
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-300 p-3 text-base font-bold shadow-xl md:text-lg"
            >
              <FcGoogle />
              Continue with Google
            </button>

            <h1 className="text-base md:text-lg">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="font-extrabold text-green-700">
                  Register free
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;