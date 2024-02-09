import OpenAI from "openai"
import { NextRequest, NextResponse } from "next/server"
import recipes from "../recipes.json"

export async function POST(request: NextRequest) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const { prompt, id } = await request.json()
  console.log(
    `You are a chef answering questions on the following recipe. ${JSON.stringify(
      recipes.find((recipe) => id && recipe.id.toString() === id)
    )}`
  )

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are a chef answering questions on the following recipe. ${JSON.stringify(
          recipes.find((recipe) => id && recipe.id.toString() === id)
        )}`
      },
      {
        role: "user",
        content: prompt // string that the user passes in
      }
    ],
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  })

  return NextResponse.json(response)
}
