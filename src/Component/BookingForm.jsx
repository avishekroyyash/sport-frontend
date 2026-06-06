"use client";

import {
  Calendar,
  DateField,
  DatePicker,
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { Check } from "@gravity-ui/icons";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BookingForm = ({ Bdata }) => {
  const router = useRouter()
  //get user 
  const {data} = useSession()
  const user = data?.user
  // console.log(user,'this is user data from booking form');

  const [hours, setHours] = useState("");

  const handleboking = async(e) => {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const BookingData = Object.fromEntries(formData.entries());
    BookingData.hours = parseInt(BookingData.hours);
    BookingData.totalPrice = Number(Bdata.pricePerHour)* Number(BookingData.hours)
    BookingData.image=Bdata?.image
    BookingData.description=Bdata?.description
    BookingData.userId=user?.id
    BookingData.userName=user?.name
    BookingData.userEmail=user?.email
    BookingData.timeSlot = BookingData.timeSlot
      .split(",")
      .map((item) => item.trim());
    // console.log(BookingData, "this is booking data ");
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-booking`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(BookingData)
    })
    const Booking = await res.json()
    toast.success('Booking is Successfully Done')
    router.push('/my-bookings')

  };

  return (
   <div className="rounded-3xl border border-green-200 bg-white p-4 shadow-sm md:p-6 lg:p-10">
  <Form onSubmit={handleboking} className="space-y-4 md:space-y-5 lg:space-y-6">
    <h2 className="border-b pb-3 text-2xl font-bold text-green-900 md:text-3xl">
      Booking Facility
    </h2>

    {/* Facility Name */}
    <TextField isRequired name="facilityName" className="w-full">
      <Label className="font-semibold text-gray-700">
        Facility Name
      </Label>

      <Input
        placeholder="Enter facility name"
        className="
          p-3 border-2 border-green-500
          focus-within:border-green-500
          focus-within:ring-green-500
          data-[focused=true]:border-green-500
        "
      />

      <FieldError />
    </TextField>

    {/* Date Picker */}
    <DatePicker className="w-full" name="date">
      <Label className="font-semibold text-gray-700">
        Date
      </Label>

      <DateField.Group
        fullWidth
        className="
          py-4 md:py-5
          border-2 border-green-500
          focus-within:border-green-500
          focus-within:ring-green-500
          data-[focused=true]:border-green-500
        "
      >
        <DateField.Input>
          {(segment) => <DateField.Segment segment={segment} />}
        </DateField.Input>

        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator />
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>

      <DatePicker.Popover className="p-1">
        <Calendar aria-label="Event date">
          <Calendar.Header>
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>

            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>

          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => (
                <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
              )}
            </Calendar.GridHeader>

            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>

          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({ year }) => (
                <Calendar.YearPickerCell year={year} />
              )}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>

    {/* Time Slot */}
    <TextField isRequired name="timeSlot" className="w-full">
      <Label className="font-semibold text-gray-700">
        Time Slot
      </Label>

      <Input
        placeholder="e.g. 10:00 AM - 11:00 AM"
        className="
          p-3 border-2 border-green-500
          focus-within:border-green-500
          focus-within:ring-green-500
          data-[focused=true]:border-green-500
        "
      />
    </TextField>

    {/* Hours */}
    <TextField
      isRequired
      name="hours"
      className="w-full"
      validate={(value) => {
        if (value > 7) {
          return "Please enter set the hour under 6 hour";
        }
        return null;
      }}
    >
      <Label className="font-semibold text-gray-700">
        Hours
      </Label>

      <Input
        onChange={(e) => setHours(e.target.value)}
        placeholder="Enter hours under 6h"
        className="
          p-3 border-2 border-green-500
          focus-within:border-green-500
          focus-within:ring-green-500
          data-[focused=true]:border-green-500
        "
      />

      <FieldError />
    </TextField>

    {/* Price Summary */}
    <div className="space-y-3 rounded-2xl border border-green-200 bg-linear-to-r from-green-50 to-white p-4 md:p-5">
      <div className="flex items-center justify-between gap-4 text-gray-700">
        <span>Rate per hour</span>

        <span className="font-semibold">
          ${Bdata.pricePerHour}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 text-gray-700">
        <span>Duration</span>

        <span className="font-semibold">
          {hours || 0} Hours
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 border-t pt-3">
        <span className="text-base font-bold text-green-900 md:text-lg">
          Total Price
        </span>

        <span className="text-lg font-bold text-green-700 md:text-xl">
          $
          {Number(Bdata.pricePerHour) * Number(hours || 0)}
        </span>
      </div>
    </div>

    {/* Submit Button */}
    <Button
      type="submit"
      className="w-full rounded-xl bg-green-600 py-5 text-base font-bold text-white shadow-md md:py-6 md:text-lg"
    >
      <Check />
      Confirm Booking
    </Button>
  </Form>
</div>
  );
};

export default BookingForm;
