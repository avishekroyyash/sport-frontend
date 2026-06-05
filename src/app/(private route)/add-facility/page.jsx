"use client";
import { useSession } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {Header, ListBox, Select, Separator,Button, Description,FieldError,Form,Input,Label,TextField, InputGroup, TextArea,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { RiUserAddLine } from "react-icons/ri";
import { toast } from "react-toastify";


const AddFacility = () => {
  const router = useRouter()
  //get the user 
   const {data} = useSession()
   const user = data?.user
  // console.log(user,'this is user of add facility price')

    const [isVisible, setIsVisible] = useState(false);

  const handleAddFacility =async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addData = Object.fromEntries(formData.entries())
    addData.pricePerHour = parseInt(addData.pricePerHour)
    addData.capacity = parseInt(addData.capacity)
    addData.availableTimeSlots = addData.availableTimeSlots.split(',').map((item)=> item.trim());
    addData.userEmail = user?.email 
    
    // console.log(addData,'this is add data from add-facility ')
    // add data into backend or mongodb with post method
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-facility`,{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(addData)
    })
    const postData = await res.json()
    toast.success('Add new facility Succesfully')
    // console.log(postData,'this is post data from add facility-page')
    router.push('/all-facility')
  };
 
    return (
      <div className="container mx-auto px-4 py-10">
  <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl bg-white shadow-2xl">

    {/* Header */}
    <div className="bg-linear-to-r from-green-600 to-emerald-700 px-8 py-12 text-center ">
      <h1 className="text-4xl font-bold text-white flex justify-center items-center gap-2">
       <RiUserAddLine /> Add New Facility
      </h1>
      <p className="mt-2 text-green-100 flex justify-center items-center gap-2">
        Create and manage sports facilities on SportNest <IoCreateOutline />
      </p>
    </div>

    {/* Form Body */}
    <Form
      onSubmit={handleAddFacility}
      className="p-8 md:p-10 space-y-6"
    >
      {/* Basic Information */}
      <div>
        <h2 className="mb-5 text-xl font-bold text-gray-800">
          Facility Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Facility Name */}
          <TextField isRequired name="facilityName">
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
            name="facilityType"
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
                <ListBox.Item id="Football" >
                  Football
                </ListBox.Item>

                <ListBox.Item id="Cricket">
                  Cricket
                </ListBox.Item>

                <ListBox.Item id="Basketball">
                  Basketball
                </ListBox.Item>

                <ListBox.Item id="Badminton">
                  Badminton
                </ListBox.Item>

                <ListBox.Item id="Table-tennis">
                  Table Tennis
                </ListBox.Item>

                <ListBox.Item id="Rugby">
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

        <TextField isRequired name="pricePerHour">
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

        <TextField isRequired name="availableTimeSlots">
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
          bg-linear-to-r
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