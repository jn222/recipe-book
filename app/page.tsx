"use client"

import { SearchBar } from "@/components/search-bar"
import RecipeList from "@/components/recipe-list"
import { useEffect, useState } from "react"

/**
 * Home page for recipe book
 */
export default function Home() {
  const [query, setQuery] = useState('bolognese')
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`/api/recipes?query=${query}`)
      const data = await response.json()
      setRecipes(data)
    }
    fetchRecipes()
  }, [])
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
