"use client"

import { Recipe } from "@/app/types/recipe.types"
import { useRouter } from "next/navigation"
import { FC } from "react"
import RecipeListItem from "./recipe-list-item"

interface Props {
  recipes?: Recipe[]
}

/**
 * Displays list of recipes
 * @param recipes
 */
const RecipeList: FC<Props> = ({ recipes }) => {
  const router = useRouter()
  return (
    <div>
      {recipes?.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          onClick={() => {
            router.push(`/recipe/${recipe.id}`)
          }}
          className="my-5"
        />
      ))}
      {!recipes?.length && <h2 className="my-10">No recipes to show!</h2>}
    </div>
  )
}

export default RecipeList
