import React from 'react'
import SocialCard from './SocialCard'
import Social1 from '@/assets/social1.png'
import Social2 from '@/assets/social2.png'
import Social3 from '@/assets/social3.png'
import Social4 from '@/assets/social4.png'
import instagramProfile from '@/assets/instagram-profile.png'
import { FaInstagram } from 'react-icons/fa'
import { Button } from '../ui/button'

const CheckOut = () => {

  const socialPost = [
    {
      username: "Foodieland",
      location: "Tokyo, Japan",
      image: Social1,
      images: [
        Social1,
        Social2,
        Social3,

      ],
      likes: {
        mutual: [
          {
            name: 'craig_love',
          }
        ],
        like: "44,686"
      },
      caption: "The vegetables dishes need to have certain vitamin for those people",
      isVerified: true,
      userAvatar: instagramProfile
    },
    {
      username: "Foodieland",
      location: "Tokyo, Japan",
      image: Social2,
      images: [
        Social2,
        Social3,
        Social4,

      ],
      likes: {
        mutual: [
          {
            name: 'craig_love',
          }
        ],
        like: "44,686"
      },
      caption: "Sweet food can bring someon into happiness as long as they don’t eat to much",
      isVerified: true,
      userAvatar: instagramProfile
    },
    {
      username: "Foodieland",
      location: "Tokyo, Japan",
      image: Social3,
      images: [
        Social3,
        Social4,
        Social1,

      ],
      likes: {
        mutual: [
          {
            name: 'craig_love',
          }
        ],
        like: "44,686"
      },
      caption: "What are you doing before start cooking? prepare the  tools or ingredients?",
      isVerified: true,
      userAvatar: instagramProfile
    },
    {
      username: "Foodieland",
      location: "Tokyo, Japan",
      image: Social4,
      images: [
        Social4,
        Social1,
        Social2,

      ],
      likes: {
        mutual: [
          {
            name: 'craig_love',
          }
        ],
        like: "44,686"
      },
      caption: "Steak never be wrong, it's suitable for you who want romantic dinner",
      isVerified: true,
      userAvatar: instagramProfile
    }


  ]

  return (
    <section className='section-padding  bg-gradient-to-b from-[#E7F9FD00]  to-[#E7F9FD] ' >
      <h2 className='section-title text-center'>Check out @foodieland on Instagram</h2>
      <p className='text-black-60 max-w-3xl text-center mx-auto'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

      <div className='social-cards grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8'>
        {socialPost.map((socialCard, index) => (
          <SocialCard key={index} socialCard={socialCard} />
        ))}
      </div>

      <div className='pb-12'>
        <Button className='flex items-center gap-4 p-8 rounded-xl text-center mx-auto '>
          <p>Visit Our Instagram</p>
          <FaInstagram />
        </Button>
        
      </div>
    </section>
  )
}

export default CheckOut