import { Recipe } from "@/app/types/recipe.types"
import { FC } from "react"
import { Separator } from "./ui/separator"

interface Props {
  recipe: Recipe
}

/**
 * Displays details of recipe
 * @param recipe
 */
const RecipeDetailView: FC<Props> = ({ recipe }) => {
  return (
    <div>
      <h1 className="text-2xl fontsemibold">{recipe.title}</h1>
      <p className="opacity-60">{recipe.description}</p>
      <Separator />
      <h2>Ingredients</h2>
      <ol>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ol>
      <Separator />
      <h2>Steps</h2>
      <ol>
        {recipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetailView
