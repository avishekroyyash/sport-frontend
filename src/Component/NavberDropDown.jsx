"use client";

import { Button, Dropdown, Kbd, Label } from "@heroui/react";
import Image from "next/image";
import { MdOutlineMail, MdOutlineManageAccounts } from "react-icons/md";
import { CiBookmark, CiLogout } from "react-icons/ci";
import { LiaAddressCard } from "react-icons/lia";
import Link from "next/link";
import { signOut } from "@/lib/auth-client";

export function NavberDropDrown({user}) {
  // console.log(user,'this is user from navberdropdown box')
  return (
    <Dropdown>
      <Button aria-label="Menu" variant="" className='flex justify-center items-center'>
        <Image className="rounded-full bg-green-600 max-w-[45px] max-h-[45px]  " src={user.image} alt={user.name[1]} width={40} height={40}></Image>
        <h1 className=" bg-linear-to-r from-green-600 to-emerald-700 text-center p-3 rounded-r-2xl font-semibold text-white px-10 ">{user.name}</h1>
      </Button>
      <Dropdown.Popover className=' border-2 border-green-600 my-3 ml-10'>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="email" textValue="New">
            <Label className="font-medium flex justify-center items-center gap-1 text-gray-600  "> <MdOutlineMail />{user.email}</Label>
            <Kbd className="" slot="" variant="light">

            </Kbd>
          </Dropdown.Item>

          <Dropdown.Item id="new" textValue="New">
           <Link href={'/my-bookings'}> <Label className="flex justify-center items-center gap-1 text-lg font-semibold"> <CiBookmark />My Bookings</Label></Link>
          </Dropdown.Item>

          <Dropdown.Item id="open" textValue="Open">
          <Link href={'/add-facility'} >  <Label className="flex justify-center items-center gap-1 text-lg font-semibold"> <LiaAddressCard />Add Facility </Label></Link>

          </Dropdown.Item>

          <Dropdown.Item id="save" textValue="Save">
          <Link href={'/manage-facilities'}>  <Label className="flex justify-center items-center gap-1 text-lg font-semibold"><MdOutlineManageAccounts /> Manage My Facilities</Label></Link>

          </Dropdown.Item>

          <Dropdown.Item onClick={()=>signOut()}  >
            <Label className="flex justify-center items-center gap-1 text-lg font-semibold text-white w-full p-1 rounded-2xl bg-linear-to-r from-green-600 to-emerald-700 "><CiLogout />Logout</Label>

          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}