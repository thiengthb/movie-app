"use client";

import React from "react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Button, Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";


export default function App() {
  return(
    <div>
      <div className="block sm:hidden">
        <Switcher/>
      </div>
      <div className="hidden sm:block">
        <Toggle/>
      </div>
    </div>
  ) 
}

export function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTheme(isSelected ? "light" : "dark");
  }, [isSelected, setTheme]);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        defaultSelected
        size="lg"
        color="warning"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      />
    </div>
  );
}

export function Switcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null;

  return(
    <div className="flex"> 
      {
        theme === "dark" 
        ? 
        <Button 
        onClick={() => setTheme("light")}
        isIconOnly 
        variant="faded"
        color="warning" 
        >
          <MoonIcon/>
        </Button>
        :
        <Button 
        onClick={() => setTheme("dark")}
        isIconOnly 
        variant="solid"
        color="warning"
        >
          <SunIcon/>
        </Button>
      }  
    </div>

  )
}





