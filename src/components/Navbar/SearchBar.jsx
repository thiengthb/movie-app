import React from 'react'
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon.jsx";

export default function SearchBar() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-tr from-pink-600 to-yellow-500 text-white">
       <Input 
        isClearable
        placeholder='Search'
        startContent={
        <SearchIcon className="text-black/80 mb-0.5 dark:text-white pointer-events-none flex-shrink-0" />
        }   
        className='focus:bg-transparent'
        classNames={{
            input: [
                "bg-transparent",
                "text-black/90 dark:text-white/60",
                "placeholder:text-black/80 dark:placeholder:text-white/80",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]/input:bg-default-200/50",
                "dark:group-data-[focus=true]/input:bg-default/60",
                "!cursor-text",
              ],
        }}
        />
    </div>
  );
}
