"use client";
import { Check } from "@gravity-ui/icons";
import {Header, ListBox, Select, Separator, Description,FieldError,Form, InputGroup, TextArea,
} from "@heroui/react";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export function EditModal({item}) {

    const router = useRouter()

const handleEdit =async(e)=>{
const id = item._id
// console.log(id,'this is handle edit id ')
e.preventDefault()
const formData = new FormData(e.currentTarget)
const editData = Object.fromEntries(formData.entries())

 editData.pricePerHour = parseInt(editData.pricePerHour)
 editData.capacity = parseInt(editData.capacity)
editData.availableTimeSlots = editData.availableTimeSlots.split(',').map((item)=> item.trim())
// console.log(editData,'this is edit data ')

 // get token in client side 
      const {data:session} = await authClient.token()
      // console.log(session.token,'this is session data')



const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-facility/${id}`,{
    method:'PATCH',
    headers:{
        'content-type' : 'application/json',
        'authorization' : `Bearer ${session?.token}`
    },
    body: JSON.stringify(editData)
})
const edit = await res.json()
 toast.success('Facility Data Edit SuccessFully')
 router.refresh('/manage-facility')
}


  return (
    <Modal>
      <Button className='bg-green-700 text-white hover:bg-green-500' variant="secondary">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
            <h1 className="bg-green-700 text-white p-3 max-w-[40px] rounded-full"> <FiEdit /></h1>
              <Modal.Heading>Edit Facility</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleEdit} className="flex flex-col gap-4">
                    <div>
                         <h2 className="mb-5 text-xl font-bold text-gray-800">
                           Facility Information
                         </h2>
                 
                         <div className="grid gap-6 md:grid-cols-2">
                           {/* Facility Name */}
                           <TextField isRequired name="facilityName" defaultValue={item.facilityName}> 
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
                             defaultValue={item.facilityType}
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
                  
       {/* location and pricing */}
                  <div className="grid gap-6 md:grid-cols-2">
        <TextField isRequired name="location" defaultValue={item.location}>
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

        <TextField isRequired name="pricePerHour" defaultValue={item.pricePerHour} >
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
        <TextField isRequired name="capacity" defaultValue={item.capacity} >
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

        <TextField isRequired name="availableTimeSlots" defaultValue={item.availableTimeSlots} >
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
      <TextField isRequired name="image" defaultValue={item.image} >
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


       <TextField isRequired name="description" defaultValue={item.description} >
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
              <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" className=' bg-linear-to-r  from-green-600 to-emerald-700' type="submit" >Edit Facility</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
        
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}