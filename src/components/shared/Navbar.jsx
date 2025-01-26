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

import { Link, NavLink } from 'react-router';
const Navbar = () => {
  const menuOptions = [
    { title: 'Home', path: "/" },
    { title: 'Recipes', path: "/recipes" },
    { title: 'Blog', path: "/blog" },
    { title: 'Contact', path: "/contact" },
    { title: 'About Us', path: "/about-us" },
  ]
  return (
    <div className='flex items-center justify-between px-2 md:px-4 lg:px-12 py-6 border-b'>
      <div className='flex items-center justify-center gap-2'>

        <div className='md:hidden flex gap-2 '>
          <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent side={'left'} className="w-[200px]">
              <SheetHeader>
                <div className='space-y-4 flex flex-col mt-4'>
                  {menuOptions.map((option, index) => (
                    <NavLink to={option.path} key={index}  className={({ isActive }) =>
                      isActive ? "bg-primaryBackground p-2 px-4  rounded-lg duration-150 w-full" : "hover:bg-primaryBackground p-2 px-4  rounded-lg duration-150 w-full"
                    }><span>{option.title}</span></NavLink>
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

       <Link to='/'>  <img src={logo} alt="foolieLand" /></Link>
      </div>
      <ul className='hidden md:flex items-center space-x-8 md:space-x-4 '>
        {menuOptions.map((option, index) => (
          <NavLink to={option.path} key={index}className={({ isActive }) =>
            isActive ? "bg-primaryBackground p-2 px-4 rounded-lg duration-150" : "hover:bg-primaryBackground p-2 px-4 rounded-lg duration-150"
          }><li >{option.title}</li></NavLink>
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