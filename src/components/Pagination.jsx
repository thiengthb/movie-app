"use client"

import {Pagination} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function App({currentPage, setCurrentPage}) {

  const router = useRouter();

  return (
    <div className="w-full flex justify-center py-10">
        <Pagination 
        showControls 
        total={3} 
        initialPage={1} 
        color="warning"
        variant="bordered"
        showShadow  
        size="lg"
        onChange={(page) => router.push(`/page?=${page}`)}
        />
    </div>
  );
}