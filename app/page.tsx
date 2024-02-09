"use client"

import { Input } from "@/components/ui/input"
import RecipeList from "@/components/recipe-list"
import { useEffect, useState } from "react"
import useRecipes from "./hooks/useRecipes"
import { Recipe } from "./types/recipe.types"

/**
 * Home page for recipe book
 */
export default function Home() {
  const [query, setQuery] = useState("")
  // const { data: recipes } = useRecipes()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`/api/recipes?query=${query}`)
      const { data } = await response.json()
      data && setRecipes(data)
    }
    fetchRecipes()
    // console.log(
    //   recipes?.filter(
    //     (recipe) => recipe.title.toLowerCase().indexOf(query.toLowerCase()) > -1
    //   )
    // )
  }, [query])
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <Input
          type="text"
          placeholder="What would you like to cook?"
          onChange={(e: any) => setQuery(e.target.value)}
          className="w-[50vw]"
        />
      </div>
      <RecipeList
        // recipes={recipes.filter(
        //   (recipe) =>
        //     recipe.title.toLowerCase().indexOf(query.toLowerCase()) > -1
        // )}
        recipes={recipes}
      />
    </main>
  )
}
