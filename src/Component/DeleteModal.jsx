"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteModal({item}) {
//  console.log(item,'this is all item from delete page ')
const router = useRouter()
    const handleDelete =async()=>{
        const id = item._id
        // console.log(id,'this is single of onclick delete')
        const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my-facility/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const deleteData = await res.json() 
        toast.error('Facility Data Delete Successfully')
        router.refresh('/manage-facilities')
      
    }

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
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