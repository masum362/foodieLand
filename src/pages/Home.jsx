import Categories from "@/components/Categories"
import CheckOut from "@/components/CheckOut"
import ChefInYou from "@/components/ChefInYou"
import Hero from "@/components/Hero"
import Newsletter from "@/components/Newsletter"
import RecipeOfTheDay from "@/components/RecipeOfTheDay"
import Recipes from "@/components/Recipes"

const Home = () => {
    return (
        <div>
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