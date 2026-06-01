"use client";

import {Button, Dropdown, Kbd, Label} from "@heroui/react";
import Image from "next/image";
import userimg from '../../public/logo.jpg'
import { MdOutlineMail, MdOutlineManageAccounts } from "react-icons/md";
import { CiBookmark, CiLogout } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { LiaAddressCard } from "react-icons/lia";

export function NavberDropDrown() {
  return (
    <Dropdown>
      <Button aria-label="Menu" variant="" className='flex justify-center items-center'>
     <Image className="rounded-full bg-green-600  " src={userimg} alt="userimg" width={50} height={50}></Image> 
     <h1 className="bg-green-600 p-3 rounded-r-2xl font-semibold text-white px-10 ">User Name</h1>
      </Button>
      <Dropdown.Popover className=' border-2 border-green-600 my-3 ml-10'>
        <Dropdown.Menu  onAction={(key) => console.log(`Selected: ${key}`)}>
             <Dropdown.Item   id="email" textValue="New">
            <Label className="font-medium flex justify-center items-center gap-1 text-gray-600  "> <MdOutlineMail />Avishek roy yash @ gamil .com</Label>
            <Kbd className="" slot="" variant="light">
             
            </Kbd>
          </Dropdown.Item>

          <Dropdown.Item id="new" textValue="New">
            <Label className="flex justify-center items-center gap-1 text-lg font-semibold"> <CiBookmark />My Bookings</Label>
          </Dropdown.Item>

          <Dropdown.Item id="open" textValue="Open">
            <Label  className="flex justify-center items-center gap-1 text-lg font-semibold"> <LiaAddressCard />Add Facility </Label>
           
          </Dropdown.Item>

          <Dropdown.Item id="save" textValue="Save">
            <Label  className="flex justify-center items-center gap-1 text-lg font-semibold"><MdOutlineManageAccounts /> Manage My Facilities</Label>
        
          </Dropdown.Item>

          <Dropdown.Item  >
            <Label  className="flex justify-center items-center gap-1 text-lg font-semibold bg-green-800 text-white w-full p-1 rounded-2xl"><CiLogout />Logout</Label>
           
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}