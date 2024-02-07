import { type Recipe } from "../types/recipe.types"
import recipes from "./recipes.json"

/**
 * Fetch the recipes from the API to display.
 * In real life, would look into storing in cache or state
 */
const useRecipes = (): { data: Recipe[] } => {
  return { data: recipes }
}

export default useRecipes
