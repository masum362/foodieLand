import recipeCard1 from '@/assets/Todaysrecipe1.png'
import recipeCard2 from '@/assets/Todaysrecipe2.png'
import recipeCard3 from '@/assets/Todaysrecipe3.png'
import recipeCard4 from '@/assets/Todaysrecipe4.png'
import recipeCard5 from '@/assets/Todaysrecipe5.png'
import recipeCard6 from '@/assets/Todaysrecipe6.png'
import recipeCard7 from '@/assets/Todaysrecipe7.png'
import recipeCard8 from '@/assets/Todaysrecipe8.png'
import RecipeCard from './TodaysRecipeCard'

const RecipeOfTheDay = () => {
    const recipes = [
    {
      id: 1,
      title: "Mixed Tropical Fruit Salad with Superfood Boosts ",
      time: "30 Minutes",
      category: "Snack",
      image: recipeCard1,
      liked: true
    },
    {
      id: 2,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Fish",
      image: recipeCard2,
      liked: false
    },
    {
      id: 3,
      title: "Healthy Japanese Fried Rice with Asparagus",
      time: "30 Minutes",
      category: "Breakfast",
      image: recipeCard3,
      liked: true
    },
    {
      id: 4,
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      time: "30 Minutes",
      category: "Healthy",
      image: recipeCard4,
      liked: false
    },
    {
      id: 5,
      title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      time: "30 Minutes",
      category: "Meat",
      image: recipeCard5,
      liked: false
    },
    {
      id: 6,
      title: "Barbeque Spicy Sandwiches with Chips ",
      time: "30 Minutes",
      category: "Sweet",
      image: recipeCard6,
      liked: false
    },
    {
      id: 7,
      title: "Firecracker Vegan Lettuce Wraps - Spicy! ",
      time: "30 Minutes",
      category: "Snack",
      image: recipeCard7,
      liked: false
    },
    {
      id: 8,
      title: "Chicken Ramen Soup with Mushroom ",
      time: "30 Minutes",
      category: "Noodles",
      image: recipeCard8,
      liked: true
    },

  ]
  return (
    <section className='section-padding'>
      <div className="flex items-center justify-between gap4">
        <h2 className='section-title max-w-lg'>Try this delicious recipe
          to make your day</h2>
        <p className='text-black-60 max-w-xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} cardDetails={recipe} />
        ))}
      </div>
    </section>
  )
}

export default RecipeOfTheDay