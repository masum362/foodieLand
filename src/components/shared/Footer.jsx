import React from 'react'
import logo from '@/assets/Foodieland..png'
import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const menuOptions = [
    
    { title: 'Recipes', path: "/recipes" },
    { title: 'Blog', path: "/blog" },
    { title: 'Contact', path: "/contact" },
    { title: 'About Us', path: "/about-us" },
  ]
  return (
    <footer className='section-padding space-y-8'>
      <div className='flex flex-col md:flex-row items-center md:items-start  justify-between gap-4'>
        <div className='flex flex-col items-center text-center md:items-start md:text-start gap-4'>
          <img src={logo} alt="foolieLand" />
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
        </div>
        <ul className='flex justify-center items-center flex-wrap md:flex-nowrap  gap-4 md:space-x-4 '>
          {menuOptions.map((option, index) => (
            <Link to={option.path} target='_blank' key={index} className="hover:underline p-2 px-4 rounded-lg duration-150 "><li >{option.title}</li></Link>
          ))}
        </ul>
      </div>
      <hr />
      <div className='flex flex-col sm:flex-row gap-4 items-center '>
        <div className='flex-1 text-center'>
          <p>© 2024 <span className='text-[#FF7967]'>Space Zee</span></p>
        </div>
        <div className='flex items-center justify-end space-x-4 lg:space-x-8'>
          <FaFacebookF/>
          <FaTwitter />
          <FaInstagram />

        </div>
      </div>
    </footer>
  )
}

export default Footer