"use client"

import useRecipes from "@/app/hooks/useRecipes"
import RecipeDetailView from "@/components/recipe-detail-view"
import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"

interface Params {
  id: string
}

/**
 * Page to individually display a recipe with title,
 * ingredients, and steps
 */
const Page: FC<{ params: Params }> = ({ params }) => {
  const [recipe, setRecipe] = useState()
  const router = useRouter()
  //   const { data: recipes } = useRecipes()
  //   const recipe = recipes.find((recipe) => recipe.id.toString() === params.id)

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`/api/recipes/${params.id}`)
      const { data } = await response.json()
      data && setRecipe(data)
    }
    fetchRecipe()
  }, [params.id])

  return (
    <main className="flex min-h-screen flex-col items-center px-10">
      <div className="w-full mb-10">
        <span
          className="cursor-pointer"
          onClick={() => {
            router.push("/")
          }}
        >
          {"<"} Back
        </span>
      </div>
      {recipe && <RecipeDetailView recipe={recipe} />}
    </main>
  )
}

export default Page
