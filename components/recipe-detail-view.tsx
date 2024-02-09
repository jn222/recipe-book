import { Recipe } from "@/app/types/recipe.types"
import { FC } from "react"
import { Separator } from "./ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      <Tabs defaultValue="Ingredients" className="max-w-lg mt-10">
        <TabsList>
          <TabsTrigger value="Ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="Steps">Steps</TabsTrigger>
        </TabsList>
        <TabsContent value="Ingredients">
          <ol>
            {recipe.ingredients.map((ingredient) => (
              <li className="my-5" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ol>
        </TabsContent>
        <TabsContent value="Steps">
          <ol>
            {recipe.steps.map((step, index) => (
              <li className="my-5" key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default RecipeDetailView
