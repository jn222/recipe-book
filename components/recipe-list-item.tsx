import { Recipe } from "@/app/types/recipe.types"
import { cn } from "@/lib/utils"
import { FC } from "react"

interface Props {
  recipe: Recipe
  className?: string
}

/**
 * Displays info for a recipe in the search list
 * @param recipe
 * @param className
 */
const RecipeListItem: FC<Props> = ({ recipe, className }) => {
  return (
    <div className={cn("rounded-xl border-[1px] p-5", className)}>
      <h1 className="text-xl fontsemibold"> {recipe.title}</h1>
      <p className="opacity-60">{recipe.info}</p>
    </div>
  )
}

export default RecipeListItem
