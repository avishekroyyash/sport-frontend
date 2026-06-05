"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export function DeleteBooking({item}) {
//  console.log(item,'this is all item from delete page ')
const router = useRouter()
    const handleDelete =async()=>{
        const id = item._id
        //  console.log(id,'this is single of onclick delete')
        const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-booking/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const deleteData = await res.json() 
        toast.error('Booking Data Delete Successfully')
        router.refresh('/my-bookings')
      
    }

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
            <h1 className="bg-red-500 text-white rounded-full p-2 max-w-[30px]" ><MdDelete /></h1>
              <AlertDialog.Heading>Delete facility permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong className="text-red-500" >{item.facilityName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Facility
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}