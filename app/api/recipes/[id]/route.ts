import { NextRequest } from "next/server"
import recipes from "../recipes.json"

export async function GET(
  { params }: { params: { id: string } }
) {
  const id = params.id
  return Response.json({
    data: recipes.find((recipe) => id && recipe.id.toString() === id)
  })
}
