"use client";

import { Button, Dropdown, Kbd, Label } from "@heroui/react";
import Image from "next/image";
import { MdOutlineMail, MdOutlineManageAccounts } from "react-icons/md";
import { CiBookmark, CiLogout } from "react-icons/ci";
import { LiaAddressCard } from "react-icons/lia";
import Link from "next/link";
import { signOut } from "@/lib/auth-client";

export function NavberDropDrown({ user }) {
  return (
    <Dropdown>
      <Button
        aria-label="Menu"
        variant=""
        className="flex items-center justify-center gap-2 px-0"
      >
        <Image
          className="rounded-full bg-green-600 w-7 h-9 md:w-11 md:h-11"
          src={user.image}
          alt={user?.name || "User"}
          width={44}
          height={44}
        />

        <h1
          className="
            bg-linear-to-r
            from-green-600
            to-emerald-700
            text-center
            py-1
            md:py-2
            lg:py-2
            px-1
            md:px-6
            lg:px-10
            rounded-r-2xl
            font-semibold
            text-white
            text-sm
            md:text-base
            max-w-[60px]
            md:max-w-[180px]
            lg:max-w-none
            truncate
          "
        >
          {user.name}
        </h1>
      </Button>

      <Dropdown.Popover
        className="
          border-2
          border-green-600
          my-3
          w-[260px]
          sm:w-[300px]
          max-w-[90vw]
        "
      >
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="email" textValue="email">
            <Label className="font-medium flex items-center gap-2 text-gray-600 text-xs sm:text-sm break-all">
              <MdOutlineMail className="shrink-0" />
              {user.email}
            </Label>
            <Kbd variant="light"></Kbd>
          </Dropdown.Item>

          <Dropdown.Item id="new" textValue="My Bookings">
            <Link href="/my-bookings">
              <Label className="flex items-center gap-2 text-sm md:text-base font-semibold">
                <CiBookmark />
                My Bookings
              </Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="open" textValue="Add Facility">
            <Link href="/add-facility">
              <Label className="flex items-center gap-2 text-sm md:text-base font-semibold">
                <LiaAddressCard />
                Add Facility
              </Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="save" textValue="Manage Facilities">
            <Link href="/manage-facilities">
              <Label className="flex items-center gap-2 text-sm md:text-base font-semibold">
                <MdOutlineManageAccounts />
                Manage My Facilities
              </Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item onClick={() => signOut()}>
            <Label className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-white w-full p-2 rounded-2xl bg-linear-to-r from-green-600 to-emerald-700">
              <CiLogout />
              Logout
            </Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}