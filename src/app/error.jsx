"use client"

import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";

export default function Error({error, reset}) {
  useEffect(
    () => {
      console.log(error);
    }, [error]);

  return (
  <div className="flex flex-col item-center justify-center h-[90vh]">
    <h1 className="text-3xl text-center text-[orange] font-bold">Something wents wrong</h1>
    <h2 className="text-xl text-center mb-10">Please try again later!</h2>
    <Button className="max-w-[20%] mx-auto" onClick={() => reset()}>Home</Button>
  </div>
  );
}
