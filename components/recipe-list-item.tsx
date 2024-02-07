import { Recipe } from "@/app/types/recipe.types"
import { cn } from "@/lib/utils"
import { FC } from "react"

interface Props {
  recipe: Recipe
  className?: string
  onClick?: () => void
}

/**
 * Displays info for a recipe in the search list
 * @param recipe
 * @param className
 * @param onClick
 */
const RecipeListItem: FC<Props> = ({ recipe, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn("rounded-xl border-[1px] p-5 cursor-pointer", className)}
    >
      <h1 className="text-xl fontsemibold"> {recipe.title}</h1>
      <p className="opacity-60">{recipe.description}</p>
    </div>
  )
}

export default RecipeListItem
