import recepiesImage from '@/assets/recepies.png'
import timerImage from '@/assets/Timer.png'
import forkKnifeImage from '@/assets/ForkKnife.png'
import heroElipse from '@/assets/Ellipse 2.png'
import PlayCircleImage from '@/assets/PlayCircle.png'
import heroImage from '@/assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png'
import { Button } from '../ui/button'
const Hero = () => {
  return (
    <section className='hero flex gap-4   max-h-screen'>
    <div className='hidden lg:flex bg-primaryBackground w-8 rounded-r-3xl'></div>
    <div className='flex-1 flex flex-col md:flex-row m-2 lg:m-0 bg-primaryBackground rounded-3xl overflow-hidden'>
      {/* Left content column */}
      <div className='w-full md:w-1/2 p-6 sm:p-4 lg:p-10 flex flex-col justify-center'>
        <div className='space-y-6 max-w-2xl'>
          <Button className='flex items-center justify-start gap-4 bg-white hover:bg-white/70 p-6 rounded-full text-black'>
            <img src={recepiesImage} alt="recepies" />
            <p className='font-semibold'>Hot Recipes</p>
          </Button>
          <h1 className='text-5xl lg:text-6xl font-semibold'>Spicy delicious chicken wings</h1>
          <p className='text-black-60'>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
            <Button className='flex items-center justify-start gap-4 bg-black/5 hover:bg-black/10 duration-150 p-6 rounded-full'>
              <img src={timerImage} alt="recepies" />
              <p className='text-black-60'>30 Minutes</p>
            </Button>
            <Button className='flex items-center justify-start gap-4 bg-black/5 hover:bg-black/10 duration-150 p-6 rounded-full'>
              <img src={forkKnifeImage} alt="recepies" />
              <p className='text-black-60'>Chicken</p>
            </Button>
          </div>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 lg:pt-16'>
            <div className='flex items-center gap-4'>
              <img src={heroElipse} alt="profile pic" />
              <div>
                <h3 className='font-semibold'>John Doe</h3>
                <p className='text-black-60'>Food Blogger</p>
              </div>
            </div>
            <Button className='flex items-center gap-4 p-6 rounded-xl'>
              <p>View Recipe</p>
              <img src={PlayCircleImage} alt="play" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Right image column */}
      <div className='w-full md:w-1/2 relative'>
        <img 
          src={heroImage} 
          alt="hero" 
          className='w-full h-full object-cover'
        />
      </div>
    </div>
    <div className='hidden lg:flex bg-primaryBackground w-8 rounded-l-3xl'></div>
  </section>
  )
}

export default Hero