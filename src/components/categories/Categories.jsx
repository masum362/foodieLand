import React from 'react'
import { Button } from '../ui/button'
import catBreakFast from '@/assets/cat-breakfast.png'
import catVegan from '@/assets/cat-vegan.png'
import catMeat from '@/assets/cat-meat.png'
import catDessert from '@/assets/cat-dessert.png'
import catLunch from '@/assets/cat-lunch.png'
import catChocolate from '@/assets/cat-chocolate.png'
import CatCard from './CatCard'

const Categories = () => {
  const categories = [
    {
      title: 'Breakfast',
      image: catBreakFast,
      firstColor: '#70824600',
      secondColor: '#7082461A'
    },
    {
      title: 'Vegan',
      image: catVegan,
      firstColor: '#6CC63F00',
      secondColor: '#6CC63F1A'
    },
    {
      title: 'Meat',
      image: catMeat,
      firstColor: '#CC261B00',
      secondColor: '#CC261B1A'
    },
    {
      title: 'Dessert',
      image: catDessert,
      firstColor: '#F09E0000',
      secondColor: '#F09E001A'
    },
    {
      title: 'Lunch',
      image: catLunch,
      firstColor: '#00000000',
      secondColor: '#0000000D'
    },
    {
      title: 'Chocolate',
      image: catChocolate,
      firstColor: '#00000000',
      secondColor: '#0000000D'
    }
  ]
  return (
    <div className='px-2 md:px-4 lg:px-12 py-6 '>
      <div className='flex items-center justify-between gap-4'>
        <h1 className='section-title'>Categories</h1>
        <Button className="bg-primaryBackground text-black font-semibold p-4 md:p-6 hover:bg-secondaryBackground rounded-2xl">View All Categories</Button>
      </div>
      <div className='categories text-center flex items-center justify-center md:justify-between gap-4 my-8 flex-wrap'>
        {categories.map((category, index) => (
          <CatCard key={index} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Categories