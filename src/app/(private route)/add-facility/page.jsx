"use client";
import { Check } from "@gravity-ui/icons";
import {Header, ListBox, Select, Separator,Button, Description,FieldError,Form,Input,Label,TextField, InputGroup, TextArea,
} from "@heroui/react";
import { useState } from "react";


const AddFacility = () => {
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
      <div className="container mx-auto px-4 py-10">
  <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl bg-white shadow-2xl">

    {/* Header */}
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-12 text-center">
      <h1 className="text-4xl font-bold text-white">
        Add New Facility
      </h1>
      <p className="mt-2 text-green-100">
        Create and manage sports facilities on SportNest
      </p>
    </div>

    {/* Form Body */}
    <Form
      onSubmit={onSubmit}
      className="p-8 md:p-10 space-y-6"
    >
      {/* Basic Information */}
      <div>
        <h2 className="mb-5 text-xl font-bold text-gray-800">
          Facility Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
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
          <Select
            name="facility-type"
            placeholder="Select facility type"
          >
            <Label className="font-semibold text-gray-700">
              Facility Type
            </Label>

            <Select.Trigger className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  ">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="football">
                  Football
                </ListBox.Item>

                <ListBox.Item id="cricket">
                  Cricket
                </ListBox.Item>

                <ListBox.Item id="basketball">
                  Basketball
                </ListBox.Item>

                <ListBox.Item id="badminton">
                  Badminton
                </ListBox.Item>

                <ListBox.Item id="table-tennis">
                  Table Tennis
                </ListBox.Item>

                <ListBox.Item id="rugby">
                  Rugby
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      {/* Location & Pricing */}
      <div className="grid gap-6 md:grid-cols-2">
        <TextField isRequired name="location">
          <Label className="font-semibold text-gray-700">
            Location
          </Label>
          <Input
            placeholder="Sylhet, Bangladesh"
           className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  "
          />
        </TextField>

        <TextField isRequired name="price-per-hour">
          <Label className="font-semibold text-gray-700">
            Price Per Hour
          </Label>
          <Input
            placeholder="500"
            className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  "
          />
        </TextField>
      </div>

      {/* Capacity & Slots */}
      <div className="grid gap-6 md:grid-cols-2">
        <TextField isRequired name="capacity">
          <Label className="font-semibold text-gray-700">
            Capacity
          </Label>
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

        <TextField isRequired name="available-slots">
          <Label className="font-semibold text-gray-700">
            Available Slots
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
      </div>

      {/* Image URL */}
      <TextField isRequired name="image">
        <Label className="font-semibold text-gray-700">
          Facility Image URL
        </Label>
        <Input
          placeholder="https://example.com/image.jpg"
        className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  "
        />
      </TextField>

      {/* Description */}
      <TextField isRequired name="description">
        <Label className="font-semibold text-gray-700">
          Description
        </Label>

        <TextArea
        className="
                  p-3 border-2 border-green-500
                 focus-within:border-green-500
                 focus-within:ring-green-500
                 data-[focused=true]:border-green-500
                  "
          placeholder="Describe the facility, amenities, parking, changing room, operating hours, and rules..."
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
    );
};

export default AddFacility;