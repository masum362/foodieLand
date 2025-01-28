import Categories from "@/components/categories/Categories"
import CheckOut from "@/components/checkout/CheckOut"
import ChefInYou from "@/components/chefinyou/ChefInYou"
import Hero from "@/components/hero/Hero"
import Newsletter from "@/components/newsletter/Newsletter"
import RecipeOfTheDay from "@/components/recipeOfTheDay/RecipeOfTheDay"
import Recipes from "@/components/recipes/Recipes"

const Home = () => {
    return (
        <div className="space-y-24" >
            <Hero />
            <Categories />
            <Recipes />
            <ChefInYou />
            <CheckOut />
            <RecipeOfTheDay />
            <Newsletter />
        </div>
    )
}

export default Home