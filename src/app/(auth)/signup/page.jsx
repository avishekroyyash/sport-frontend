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
import Link from "next/link";
import {
  MdOutlineCreate,
  MdOutlineSportsCricket,
} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ResisterPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleResister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const ResisterData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signUp.email({
      name: ResisterData.name,
      email: ResisterData.email,
      password: ResisterData.password,
      image: ResisterData.image,
      callbackURL: "/",
    });

    if (!error) {
      toast.success("Resister is Successfully Complete");
      router.push("/login");
    } else {
      toast.error(`${error.message}`);
    }
  };

  const handleGoogleResister = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="container mx-auto my-5 px-4">
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* Image Section - Only Laptop/Desktop */}
        <div className="hidden lg:block">
          <Image
            className="rounded-2xl"
            src={regpic}
            alt="register-pic"
            width={500}
            height={500}
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md md:max-w-lg">
          {/* Header */}
          <div className="rounded-t-2xl bg-linear-to-r from-green-600 to-emerald-700 px-4 py-8 text-center md:px-8 md:py-10">
            <h1 className="flex items-center justify-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              <MdOutlineCreate />
              Create Your Account
            </h1>

            <p className="mt-2 flex items-center justify-center gap-1 font-semibold text-gray-300">
              Stay with Sportnest
              <MdOutlineSportsCricket />
            </p>
          </div>

          {/* Form */}
          <Form
            className="flex w-full flex-col gap-4 rounded-b-3xl border-2 p-4 md:p-6"
            onSubmit={handleResister}
          >
            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label className="text-lg font-semibold">Name</Label>

              <Input
                placeholder="Enter Your Name"
                className="
                  border-2 border-green-500 p-3
                  focus-within:border-green-500
                  focus-within:ring-green-500
                  data-[focused=true]:border-green-500
                "
              />

              <FieldError />
            </TextField>

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

            {/* Image URL */}
            <TextField isRequired name="image" type="text">
              <Label className="text-lg font-semibold">Image Url</Label>

              <Input
                placeholder="https://..."
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
                  placeholder="Enter Strong Password"
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

            {/* Submit */}
            <div className="w-full">
              <Button
                className="w-full bg-linear-to-r from-green-600 to-emerald-700 p-5 text-base font-bold md:p-6 md:text-lg"
                type="submit"
              >
                <MdOutlineCreate />
                Create Account
              </Button>
            </div>
          </Form>

          {/* Google Login */}
          <div className="my-3 space-y-2 text-center">
            <p className="font-semibold text-gray-600">
              or continue with
            </p>

            <button
              onClick={handleGoogleResister}
              className="flex w-full items-center justify-center gap-1 rounded-full border-2 border-gray-300 p-3 text-base font-bold shadow-xl md:text-lg"
            >
              <FcGoogle />
              Continue with Google
            </button>

            <h1 className="text-base md:text-lg">
              Already have an account?{" "}
              <Link href="/login">
                <span className="font-extrabold text-green-700">
                  Sign in
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResisterPage;