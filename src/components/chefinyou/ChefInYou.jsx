import chefImage from '@/assets/portrait-happy-male-chef-dressed-uniform 1.png'
import catMeat from "@/assets/cat-meat.png"
import catVegan from "@/assets/cat-vegan.png"
import catTomato from "@/assets/cat-tomato.png"
import catOnion from "@/assets/cat-onion.png"
import { Button } from '../ui/button'

const ChefInYou = () => {
  return (
    <section className='hero flex gap-4 lg:max-h-screen section-padding'>
      <div className='flex-1 flex flex-col md:flex-row m-2 lg:m-0 items-center justify-center  rounded-3xl overflow-hidden'>
        {/* Left content column */}
        <div className='w-full md:w-1/2 p-6 sm:p-4 lg:py-10 flex flex-col justify-center'>
          <div className='space-y-6 max-w-2xl'>

            <h1 className='text-4xl lg:text-5xl font-semibold'>Everyone can be a
            chef in their own kitchen</h1>
            <p className='text-black-60'>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
            </p>

            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 lg:pt-12'>

              <Button className='p-4 md:px-8 md:py-6 rounded-xl'>
                <p>Learn More</p>
              </Button>
            </div>
          </div>
        </div>

        {/* Right image column */}
        <div className='w-full md:w-1/2 relative  '>
          
          <img
            src={chefImage}
            alt="hero"
            className=' w-full h-full object-contain'
          />
          
        </div>
      </div>

    </section>
  )
}

export default ChefInYou