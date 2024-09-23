"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import {useTheme} from "next-themes";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher"
import Logo from "./Logo";
import SearchBar from "../SearchBar/SearchBar";
import LoginModal from "@/components/Login/LoginModal";
import SignUpModal from "@/components/SignUp/SignUpModal";
import { usePathname } from 'next/navigation'



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const navbarTitles = [
    "Home",
    "Trend",
    "Top Rate"
  ]

  return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          <NavbarBrand>
            <Logo theme={theme}/>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Logo theme={theme}/>
          </NavbarBrand>
        </NavbarContent>
        
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navbarTitles.map((title) => {
            return pathname == `/${title.replace(/\s+/g, '').toLowerCase()}` || (pathname == '/' && title.toLowerCase() == "home") ? 
            (<NavbarItem isActive>
              <Link href={`/${title.replace(/\s+/g, '').toLowerCase()}`} color="warning" aria-current="page" className="px-3 text-xl font-semibold">
                {title}
              </Link>
            </NavbarItem>)
          :
            (<NavbarItem>
              <Link href={`/${title.replace(/\s+/g, '').toLowerCase()}`} color="foreground" className="px-3 text-md">
                {title}
              </Link>
          </NavbarItem>)
          })}
        </NavbarContent>

        <NavbarContent className="max-w-[300px] hidden lg:flex">
          <SearchBar />
        </NavbarContent>

        <NavbarContent className="max-w-40 lg:max-w-64" justify="end">
          <NavbarItem className="hidden lg:flex" isActive>
            <SignUpModal />
          </NavbarItem>
          <NavbarItem>
            <LoginModal />
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="z-50">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
  );
}





