import Image from "next/image";
import { Check } from "@gravity-ui/icons";
import {
  Header,
  ListBox,
  Select,
  Separator,
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
  TextArea,
} from "@heroui/react";
import React from "react";
import detailsimg from "../../../../../public/sportnest3.jpg";

const BookingDetaisPage = () => {
  return (
    <div className="flex container mx-auto">
      {/* this is details page */}
      <div>
        <Image src={detailsimg} alt="image" width={350} height={350}></Image>
        <h2 className="text-2xl font-bold text-gray-800">
          Sylhet Football Arena
        </h2>
        <p className="mt-1 text-gray-500">Tilagor, Sylhet</p>
        <div className="flex justify-between">
          <span>Capacity</span>
          <span className="font-semibold">22 Players</span>
        </div>

        <div className="flex justify-between">
          <span>Available Slots</span>
          <span className="font-semibold text-green-600">3 Slots</span>
        </div>
        <button>price</button>
        <p>Description about Faciliy</p>
        <p>facility catagory</p>
      </div>
      {/* this is booking form */}
      <div>
      {/* i can add any tag in this place */}
        <div>
          <Form className="p-8 w-120 md:p-10 space-y-6">
            {/* Basic Information */}
           
              <h2 className="mb-5 text-xl font-bold text-gray-800">
                Booking Facility
              </h2>

              {/* Facility Name */}
              <TextField isRequired name="facility-name">
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
              </TextField>

              {/* Facility Type */}
           

            {/* Time Slot & Hours */}

            <TextField isRequired name="time-slot">
              <Label className="font-semibold text-gray-700">
                Time Slot
              </Label>
              <Input
                placeholder="3 Slots"
                className="
                                      p-3 border-2 border-green-500
                                     focus-within:border-green-500
                                     focus-within:ring-green-500
                                     data-[focused=true]:border-green-500
                                      "
              />
            </TextField>

            <TextField isRequired name="hours">
              <Label className="font-semibold text-gray-700">Hours</Label>
              <Input
                placeholder="22 Players"
                className="
                                      p-3 border-2 border-green-500
                                     focus-within:border-green-500
                                     focus-within:ring-green-500
                                     data-[focused=true]:border-green-500
                                      "
              />
            </TextField>

            {/* Submit Button */}
            <Button
              type="submit"
              className="
                              w-full
                              rounded-xl
                              bg-gradient-to-r
                              from-green-600
                              to-emerald-700
                              py-7
                              text-lg
                              font-bold
                              text-white
                              transition-all
                              duration-300
                              hover:scale-[1.02]
                              hover:shadow-lg
                            "
            >
              <Check />
              Add Facility
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookingDetaisPage;
