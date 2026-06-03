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

import Image from "next/image";
import { Check } from "@gravity-ui/icons";
import React from "react";
import detailsimg from "../../../../../public/sportnest3.jpg";

const BookingDetaisPage = () => {
  return (
    <div className="container mx-auto my-12 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
      {/* ================= LEFT SIDE DETAILS ================= */}
      <div className="rounded-3xl border border-green-200 bg-gradient-to-b from-green-50 to-white p-6 shadow-sm space-y-6">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-green-200 shadow-sm">
          <Image
            src={detailsimg}
            alt="facility"
            width={500}
            height={350}
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <div>
          <h2 className="text-3xl font-bold text-green-900">
            Sylhet Football Arena
          </h2>
          <p className="text-gray-600 mt-1">📍 Tilagor, Sylhet</p>
        </div>

        {/* Details Card */}
        <div className="rounded-2xl bg-white border border-green-100 p-5 space-y-4 shadow-sm">
          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-600 font-medium">Capacity</span>
            <span className="font-bold text-green-700">22 Players</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-600 font-medium">Available Slots</span>
            <span className="font-bold text-green-700">3 Slots</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Category</span>
            <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Football
            </span>
          </div>
        </div>

        {/* Price Box */}
        <div className="rounded-2xl bg-green-100 border border-green-200 p-5 flex justify-between items-center">
          <span className="text-green-900 font-semibold">Price per Hour</span>
          <span className="text-2xl font-bold text-green-700">৳950</span>
        </div>

        {/* Description */}
        <div className="text-gray-600 leading-7">
          Premium football facility with high-quality turf, professional
          lighting, and modern dressing rooms designed for players and
          tournaments.
        </div>
      </div>

      {/* ================= RIGHT SIDE FORM ================= */}
      <div className="rounded-3xl border border-green-200 bg-white shadow-sm p-6 lg:p-10">
        <Form className="space-y-6">
          <h2 className="text-3xl font-bold text-green-900 border-b pb-3">
            Booking Facility
          </h2>

          {/* Facility Name */}
          <TextField isRequired name="facility-name">
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
      <Label className="text-gray-700 font-semibold" >Date</Label>
      <DateField.Group fullWidth  className=" py-5
                      border-2 border-green-500
                      focus-within:border-green-500
                      focus-within:ring-green-500
                      data-[focused=true]:border-green-500
                       ">
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input >
        <DateField.Suffix >
          <DatePicker.Trigger >
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
            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
          </Calendar.Grid>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({year}) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>

          {/* Time Slot */}
          <TextField isRequired name="time-slot">
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
          <TextField isRequired name="hours">
            <Label className="text-gray-700 font-semibold">Hours</Label>
            <Input
              placeholder="Enter hours"
              className="
                       p-3 border-2 border-green-500
                      focus-within:border-green-500
                      focus-within:ring-green-500
                      data-[focused=true]:border-green-500
                       "
            />
          </TextField>

          {/* Price Summary (More Premium) */}
          <div className="rounded-2xl bg-gradient-to-r from-green-50 to-white border border-green-200 p-5 space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Rate per hour</span>
              <span className="font-semibold">৳80</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Duration</span>
              <span className="font-semibold">12 Hours</span>
            </div>

            <div className="border-t pt-3 flex justify-between">
              <span className="text-green-900 font-bold text-lg">
                Total Price
              </span>
              <span className="text-green-700 font-bold text-xl">৳950</span>
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
    </div>
  );
};

export default BookingDetaisPage;
