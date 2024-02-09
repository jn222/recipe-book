import { NextRequest } from "next/server"
import recipes from "./recipes.json"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  return Response.json({
    data: recipes.filter((recipe) => query && recipe.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  })
}
