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
import reglogo from "../../../../public/login-logo.jpg";
import Image from "next/image";

const ResisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="my-5 border-4 container mx-auto">
      <div className=" flex justify-center items-center gap-10 ">
        <div>
          <Image
            className="max-h-[600px]"
            src={regpic}
            alt="register-pic"
            width={500}
            height={500}
          ></Image>
        </div>
        <div>
        
            <h1 className="font-bold bg-green-800 text-white py-15 rounded-t-2xl text-4xl text-center">
            Regiter Your Account{" "}
          </h1>
        
          <Form
            className="flex w-118 border-4 flex-col gap-4  "
            onSubmit={onSubmit}
          >
            {/* name field */}

            <TextField isRequired name="name" type="text">
              <Label className="text-lg font-semibold">Name</Label>
              <Input
                placeholder="Enter Name "
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
              <Input placeholder="john@example.com"  
                className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  " />
              <FieldError />
            </TextField>

            {/* Image url field */}

            <TextField isRequired name="image" type="text">
              <Label className="text-lg font-semibold">Image Url</Label>
              <Input placeholder="img url" 
                 className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  " />
              <FieldError />
            </TextField>

            {/* Passeword fill */}

            <TextField className="w-full  " name="password">
              <Label className="text-lg font-semibold">Password</Label>
              <InputGroup  className='border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500'>
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

            <div className="">
             
           
               <Button className='bg-green-600 w-full p-6' type="submit">
                <Check />
                Register Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResisterPage;
