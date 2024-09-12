"use client";

import React from "react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = React.useState(true);

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div >
      <Switch
      isSelected={isSelected} onValueChange={setIsSelected}
      defaultSelected
      size="lg"
      color="warning"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      {isSelected ? setTheme("light") : setTheme("dark")}
    </Switch>
    </div>
  )
};

