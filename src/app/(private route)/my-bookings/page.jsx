import {Button, Card, CloseButton} from "@heroui/react";
import Image from "next/image";
import React from 'react';
import testpic from '../../../../public/all-sport-element.jpg'

const MyBookingsPage = () => {
    return (
        <div>
             <Card className="container mx-auto items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">

       <Image 
       className="object-cover"
       src={testpic}
        alt='image1'
         fill >
       </Image>
       
        {/* <img
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
        /> */}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
            faucibus etiam.
          </Card.Description>
       
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Only 10 spots</span>
            <span className="text-xs text-muted">Submission ends Oct 10.</span>
                <Button className="w-full sm:w-auto">Cancle Book</Button>
          </div>
         
        </Card.Footer>
      </div>
    </Card>
        </div>
    );
};

export default MyBookingsPage;