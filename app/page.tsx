import { SearchBar } from "@/components/search-bar"
import useRecipes from "./hooks/useRecipes"
import { title } from "process"
import RecipeList from "@/components/recipe-list"

/**
 * Home page for recipe book
 */
export default function Home() {
  const { data: recipes } = useRecipes()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <SearchBar />
      </div>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </main>
  )
}
