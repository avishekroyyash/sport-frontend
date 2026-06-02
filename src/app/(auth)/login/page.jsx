"use client";
import { Check } from "@gravity-ui/icons";
import {Button, Description,FieldError,Form,Input,Label,TextField, InputGroup,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import regpic from "../../../../public/register1.webp";
import Image from "next/image";
import React from 'react';

const LoginPage = () => {
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
       <div className="my-5  container mx-auto">
           <div className=" flex justify-center items-center gap-10 ">
             {/* picture fiied */}
             <div>
               <Image
                 className="min-h-[650px] rounded-2xl"
                 src={regpic}
                 alt="register-pic"
                 width={500}
                 height={500}
               ></Image>
             </div>
             {/* create accout of top filled */}
              <div>
                 <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-10 text-center rounded-t-2xl">
                   <h1 className="font-bold  text-white text-4xl ">
                 Signup Your Account{" "}
               </h1>
                <p className="font-semibold text-gray-300">Stay with Sportnest</p>
                 </div>
                 {/* actual form filled */}
               <Form
                 className="flex w-118 border-2 rounded-b-3xl flex-col gap-4 space-y-1  "
                 onSubmit={onSubmit}
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
                   <Input placeholder="john@example.com"  
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
                  
                
                    <Button className='bg-green-600 w-full font-bold text-lg p-6' type="submit">
                     <Check />
                    Sign in
                   </Button>
                 </div>
               </Form>
               {/* Google login or login filled */}
              <div className=" text-center space-y-2 my-2">
               <p className="font-semibold text-gray-600">or continue with</p>
               <button className=" font-bold text-lg w-full p-2 rounded-full border-2 border-gray-300 shadow-xl">Continue with Google</button>
              <h1 className="text-lg">Don't have an account? <span className="text-green-700 font-extrabold">Resister free</span></h1>
              </div>
             </div>
           </div>
         </div>
    );
};

export default LoginPage;