import { SearchBar } from "@/components/search-bar"
import useRecipes from "./hooks/useRecipes"
import RecipeListItem from "@/components/recipe-list-item"
import { title } from "process"

/**
 * Home page for recipe book
 */
export default function Home() {
  const recipes = useRecipes()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <SearchBar />
      </div>
      <div>
        {recipes.data.map((recipe) => (
          <RecipeListItem recipe={recipe} className="my-5" key={recipe.id} />
        ))}
      </div>
    </main>
  )
}
