import logo from '@/assets/Foodieland..png'
import { Menu } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { NavLink } from 'react-router';
const Navbar = () => {
  const menuOptions = [
    { title: 'Home', path: "/" },
    { title: 'Recipes', path: "/recipes" },
    { title: 'Blog', path: "/blog" },
    { title: 'Contact', path: "/contact" },
    { title: 'About Us', path: "/about-us" },
  ]
  return (
    <div className='flex items-center justify-between px-2 md:px-4 lg:px-12 py-8 border-b'>
      <div className='flex items-center justify-self-center gap-2'>

        <Sheet>
          <SheetTrigger><Menu /></SheetTrigger>
          <SheetContent side={'left'} className="w-[200px]">
            <SheetHeader>
              <ul className='space-y-4'>
                {menuOptions.map((option, index) => (
                  <NavLink to={option.path} key={index}><li className='hover:bg-white/25' >{option.title}</li></NavLink>
                ))}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <img src={logo} alt="foolieLand" />
      </div>
      <ul className='hidden md:flex items-center space-x-8 lg:space-x-8 '>
        {menuOptions.map((option, index) => (
          <NavLink to={option.path} key={index}><li >{option.title}</li></NavLink>
        ))}
      </ul>
      <div className='flex items-center space-x-4 lg:space-x-8'>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />

      </div>
    </div>
  )
}

export default Navbar