"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
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

  const handleLogin =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries())
    // console.log(loginData,'this is login data')
    const { data, error } = await authClient.signIn.email({
    email: loginData.email, // required
    password: loginData.password, // required
    rememberMe: true,
    callbackURL: "/",
});
// console.log('DATA',data)
// console.log('ERROR',error)
if(error){
  toast.error(`${error.message}`)
}
else{
toast.success('Login is Successfully Complete')
}
  
  };

  const handleGoogleLogin = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <div className="my-5  container mx-auto">
      <div className=" flex justify-center items-center gap-10 ">
        {/* picture fiied */}
        <div>
          <Image
            className="min-h-162.5 rounded-2xl"
            src={regpic}
            alt="register-pic"
            width={500}
            height={500}
          ></Image>
        </div>
        {/* create accout of top filled */}
        <div>
          <div className="bg-linear-to-r from-green-600 to-emerald-700 px-8 py-10 text-center rounded-t-2xl">
            <h1 className="font-bold  text-white text-4xl flex justify-center items-center gap-1 ">
              <GoSignIn />Sign in Your Account{" "}
            </h1>
            <p className="font-semibold text-gray-300">Stay with Sportnest</p>
          </div>
          {/* actual form filled */}
          <Form
            className="flex w-118 border-2 rounded-b-3xl flex-col gap-4 space-y-1  "
            onSubmit={handleLogin}
          >
            {/* Email field */}

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-lg font-semibold">Email</Label>
              <Input
                placeholder="john@example.com"
                className="
                       p-3 border-2 border-green-500
                      focus-within:border-green-500
                      focus-within:ring-green-500
                      data-[focused=true]:border-green-500
                       "
              />
              <FieldError />
            </TextField>

            {/* Passeword fill */}

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
                className="border-2 border-green-500
                      focus-within:border-green-500
                      focus-within:ring-green-500
                      data-[focused=true]:border-green-500"
              >
                <InputGroup.Input
                  placeholder="Password"
                  className="w-full p-3  "
                  type={isVisible ? "text" : "password"}
                  //    value={isVisible ? "" : "Enter Password"}
                />
                <InputGroup.Suffix className="pr-0 ">
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

            <div>
              <Button
                className="bg-green-600 w-full font-bold text-lg p-6"
                type="submit"
              >
               
                <GoSignIn /> Sign in
              </Button>
            </div>
          </Form>
          {/* Google login or login filled */}
          <div className=" text-center space-y-2 my-2">
            <p className="font-semibold text-gray-600">or continue with</p>
            <button onClick={handleGoogleLogin} className=" font-bold text-lg w-full p-2 rounded-full border-2 border-gray-300 shadow-xl flex justify-center items-center gap-1">
             <FcGoogle /> Continue with Google
            </button>
            <h1 className="text-lg">
              Don't have an account?{" "}
              <Link href={'/signup'}><span className="text-green-700 font-extrabold">
                Resister free
              </span></Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
