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
import { MdOutlineCreate, MdOutlineDriveFileRenameOutline, MdOutlineSportsCricket } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const ResisterPage = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false);

  const handleResister =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ResisterData = Object.fromEntries(formData.entries())
    // console.log(ResisterData,'this is resister data ')
   
    const { data, error } = await authClient.signUp.email({
    name: ResisterData.name, 
    email: ResisterData.email, 
    password: ResisterData.password , 
    image: ResisterData.image,
    callbackURL: "/",
    });    
    // console.log('DATA',data)
    //  console.log('ERRor',error)
   if(!error){
  toast.success("Resister is Successfully Complete")
   router.push('/login')
   }
   else{
    toast.error(`${error.message}`)
   }
    
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
            <h1 className="font-bold  text-white text-4xl flex items-center ">
            <MdOutlineCreate />  Create Your Account{" "} 
            </h1>
            <p className="font-semibold text-gray-300 flex justify-center items-center gap-1">Stay with Sportnest <MdOutlineSportsCricket /></p>
          </div>

          {/* this is  actual form filled */}

          <Form
            className="flex w-118 border-2 rounded-b-3xl flex-col gap-4  "
            onSubmit={handleResister}
          >
            {/* name field */}

            <TextField isRequired name="name" type="text">
              <Label className="text-lg font-semibold">Name</Label>
             
              <Input
                
                placeholder=" Enter Your Name "
                className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  "
              />
              <FieldError />
            </TextField>

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

            {/* Image url field */}

            <TextField isRequired name="image" type="text">
              <Label className="text-lg font-semibold">Image Url</Label>
              <Input
                placeholder="https://..."
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
              className="w-full "
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
                  placeholder="Enter Strong Password"
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

            <div className="">
              <Button
                className="bg-linear-to-r from-green-600 to-emerald-700  w-full font-bold text-lg p-6"
                type="submit"
              >
                <MdOutlineCreate />
                Create Account
                
              </Button>
            </div>
          </Form>
          {/* Google login or login filled */}
          <div className=" text-center space-y-2 my-2">
            <p className="font-semibold text-gray-600">or continue with</p>
            <button className=" font-bold text-lg w-full p-2 rounded-full border-2 border-gray-300 shadow-xl flex justify-center items-center gap-1 ">
             <FcGoogle /> Continue with Google
            </button>
            <h1 className="text-lg">
              Already have an account?{" "}
              <Link href={'/login'}><span className="text-green-700 font-extrabold">Sign in</span></Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResisterPage;
