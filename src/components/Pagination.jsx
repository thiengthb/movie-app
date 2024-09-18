"use client"

import {Pagination} from "@nextui-org/react";

export default function App({currentPage, setCurrentPage}) {

  return (
    <div className="w-full flex justify-center py-10">
        <Pagination 
        showControls 
        total={3} 
        initialPage={currentPage} 
        color="warning"
        variant="bordered"
        showShadow  
        size="lg"
        onChange={setCurrentPage}
        />
    </div>
  );
}