import React from 'react'
import RecipeCard from './RecipeCard'

import recipeCard1 from '@/assets/recipeCard1.png'
import recipeCard2 from '@/assets/recipeCard2.png'
import recipeCard3 from '@/assets/recipeCard3.png'
import recipeCard4 from '@/assets/recipeCard4.png'
import recipeCard5 from '@/assets/recipeCard5.png'
import recipeCard6 from '@/assets/recipeCard6.png'
import recipeCard7 from '@/assets/recipeCard7.png'
import recipeCard8 from '@/assets/recipeCard8.png'
import recipeAds from '@/assets/recipeAds.png'


const Recipes = () => {

  const recipes = [
    {
      id: 1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Snack",
      image: recipeCard1,
      liked: true
    },
    {
      id: 2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      time: "30 Minutes",
      category: "Fish",
      image: recipeCard2,
      liked: false
    },
    {
      id: 3,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      time: "30 Minutes",
      category: "Breakfast",
      image: recipeCard3,
      liked: false
    },
    {
      id: 4,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      time: "30 Minutes",
      category: "Healthy",
      image: recipeCard4,
      liked: true
    },
    {
      id: 5,
      title: "Chicken Meatballs with Cream Cheese",
      time: "30 Minutes",
      category: "Meat",
      image: recipeCard5,
      liked: false
    },
    {
      id: 6,
      title: "Fruity Pancake with Orange & Blueberry",
      time: "30 Minutes",
      category: "Sweet",
      image: recipeCard6,
      liked: true
    },
    {
      id: 7,
      title: "The Best Easy One Pot Chicken and Rice",
      time: "30 Minutes",
      category: "Snack",
      image: recipeCard7,
      liked: false
    },
    {
      id: 8,
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      time: "30 Minutes",
      category: "Noodles",
      image: recipeCard8,
      liked: false
    },

  ]

  return (
    <div className='px-2 md:px-4 lg:px-12 py-6 space-y-6 '>
      <h1 className="section-title text-center">
        Simple and tasty recipes
      </h1>
      <p className='text-black-60 max-w-2xl mx-auto text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
        {/* 1-5 cards here */}
        {recipes.slice(0, 5).map((recipe, index) => (
          <RecipeCard key={index} cardDetails={recipe} />
        ))}
        {/* ads image  here */}
        <img src={recipeAds} alt="recipeAds" className="object-cover" />
        {/* 6-8 cards here */}
        {recipes.slice(5, 8).map((recipe, index) => (
          <RecipeCard key={index} cardDetails={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Recipes