"use client"
import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

type SearchIconProps = {
    size?: number;
    strokeWidth?: number;
    width: number;
    height: number;
    // other properties...
  };

export const SearchIcon:React.FC<SearchIconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);



export const  SearchNavbar:React.FC=()=> {

  const [userInput,setUserInput] = useState<string>("");
  const router=useRouter();

  const handleUserSearchImput=(e:any)=>{
    setUserInput(e.target.value);
  }

  const handleKeyDown=(e:any)=>{
    if(e.key === 'Enter'){
      router.push(`/page/Search?${userInput}`)
      setTimeout(()=>{window.location.reload()},2000);
    }
  }

  const isSmallScreen = window.innerWidth <= 768; 

  return (
    <Navbar isBordered className="bg-white">
      <NavbarContent justify="start">
        <Link href="/" prefetch={false}>
        <NavbarBrand className="mr-4">

        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M71.68 20.48c-28.232 0-51.2 22.968-51.2 51.2v112.64c0 28.232 22.968 51.2 51.2 51.2h112.64c28.232 0 51.2-22.968 51.2-51.2V71.68c0-28.232-22.968-51.2-51.2-51.2zM128 43.52c1.826 0 3.653.948 4.59 2.85l24.59 49.83 55 8c4.198.61 5.881 5.766 2.84 8.73l-39.8 38.8 9.39 54.76c.717 4.183-3.672 7.376-7.43 5.4L128 186.03l-49.19 25.86c-3.758 1.976-8.147-1.217-7.43-5.4l9.4-54.76-39.8-38.8c-3.041-2.964-1.368-8.12 2.83-8.73l55.01-8 24.59-49.83c.94-1.902 2.764-2.85 4.59-2.85zm0 16.69l-22.37 45.33L128 143.36zm0 83.15l72.21-30.3.23-.22-49.79-7.23zm0 0l-44.63 54.56L128 174.46l.02.01-.02-31.07 44.52 54.47.25.13-8.55-49.83zm0 0l-72.27-30.55-.17.03 36.16 35.25z"
        fill="#50a90d"
        fontFamily="none"
        fontSize="none"
        textAnchor="none"
      />
    </svg>
    <img src="/images/logo100.png" className="w-12 h-12 2xl:w-16 2xl:h-16" />
          <p className="hidden sm:block font-bold text-inherit  text-3xl mr-20 ml-3">
            
            Pixels</p>
        </NavbarBrand>
        </Link>
        <NavbarContent className="hidden sm:flex gap-10">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="success">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-between " justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[40rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder={isSmallScreen ? "Search" : "Type to search..."}
          size="sm"
          startContent={<SearchIcon size={18}/>}
          type="search"
          onChange={(e)=>{handleUserSearchImput(e)}}
          onKeyDown={handleKeyDown}
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="success">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
