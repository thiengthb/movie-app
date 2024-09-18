import React from 'react'

import { Link, Image } from "@nextui-org/react";

export default function Logo({ theme }) {
    return (
      <div className="flex justify-center">
        <Link href="https://tensoract.io/" className="hidden md:block">
          { theme == "dark" ? 
                <Image
                  isBlurred
                  src="https://tensoract.io/images/logo-dark.svg"
                  alt="logo"
                  className="m-5"
                />
                :
                <Image
                  isBlurred
                  src="https://tensoract.io/images/logo-light.svg"
                  alt="logo"
                  className="m-5"
                />
              }
        </Link>
        <Link href="/">
          <p className="font-bold text-2xl text-[orange]">MOVIE</p>
        </Link>
      </div>
    )
}