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
    <div className="rounded-3xl border border-green-200 bg-white shadow-sm p-6 lg:p-10">
      <Form onSubmit={handleboking} className="space-y-6">
        <h2 className="text-3xl font-bold text-green-900 border-b pb-3">
          Booking Facility
        </h2>

        {/* Facility Name */}
        <TextField isRequired name="facilityName">
          <Label className="text-gray-700 font-semibold">Facility Name</Label>
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

        {/* Date Picker (Enhanced Green Focus) */}
        <DatePicker className="w-full  " name="date">
          <Label className="text-gray-700 font-semibold">Date</Label>
          <DateField.Group
            fullWidth
            className=" py-5
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
                  {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                </Calendar.GridHeader>
                <Calendar.GridBody>
                  {(date) => <Calendar.Cell date={date} />}
                </Calendar.GridBody>
              </Calendar.Grid>
              <Calendar.YearPickerGrid>
                <Calendar.YearPickerGridBody>
                  {({ year }) => <Calendar.YearPickerCell year={year} />}
                </Calendar.YearPickerGridBody>
              </Calendar.YearPickerGrid>
            </Calendar>
          </DatePicker.Popover>
        </DatePicker>

        {/* Time Slot */}
        <TextField isRequired name="timeSlot">
          <Label className="text-gray-700 font-semibold">Time Slot</Label>
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
        <TextField isRequired name="hours"
         validate={(value) => {
          if (value > 7) {
            return "Please enter set the hour under 6 hour";
          }
          return null;
        }}
        >
          <Label className="text-gray-700 font-semibold">Hours</Label>
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

        {/* Price Summary (More Premium) */}
        <div className="rounded-2xl bg-linear-to-r from-green-50 to-white border border-green-200 p-5 space-y-3">
          <div className="flex justify-between text-gray-700">
            <span>Rate per hour</span>
            <span className="font-semibold">${Bdata.pricePerHour}</span>
          </div>

          <div className="flex justify-between text-gray-700">
            <span>Duration</span>
            <span className="font-semibold">{hours} Hours</span>
          </div>

          <div className="border-t pt-3 flex justify-between">
            <span className="text-green-900 font-bold text-lg">
              Total Price
            </span>
            <span className="text-green-700 font-bold text-xl">${Number(Bdata.pricePerHour) * Number(hours)}</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full rounded-xl bg-green-600 hover:bg-green-700 py-6 text-white font-bold text-lg shadow-md"
        >
          <Check />
          Confirm Booking
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
