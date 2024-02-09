import { NextRequest } from "next/server"
import recipes from "@/app/api/recipes.json"

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  return Response.json({
    data: recipes.find((recipe) => id && recipe.id.toString() === id)
  })
}
