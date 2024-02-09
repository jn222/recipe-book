"use client"

import useRecipes from "@/app/hooks/useRecipes"
import ChefChat from "@/components/chef-chat"
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
  const [isChatLoading, setIsChatLoading] = useState(false)
  const [chatResponse, setChatResponse] = useState("")
  const { id } = params
  const router = useRouter()
  //   const { data: recipes } = useRecipes()
  //   const recipe = recipes.find((recipe) => recipe.id.toString() === params.id)

  const fetchChatResponse = async (prompt: string) => {
    setIsChatLoading(true)
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt,
        id
      })
    })

    setIsChatLoading(false)
    const result = await response.json()
    setChatResponse(result.choices[0]["message"]["content"])
  }

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`/api/recipes/${id}`)
      const { data } = await response.json()
      data && setRecipe(data)
    }
    fetchRecipe()
  }, [id])

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
      {recipe && (
        <>
          <RecipeDetailView recipe={recipe} />
          <ChefChat
            isLoading={isChatLoading}
            onSubmit={fetchChatResponse}
            chatResponse={chatResponse}
          />
        </>
      )}
    </main>
  )
}

export default Page
