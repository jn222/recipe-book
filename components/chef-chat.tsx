import { FC, useState } from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

interface Props {
  onSubmit: (prompt: string) => void
  isLoading?: boolean
  chatResponse?: string
}

/**
 * Displays the chef chat
 */
const ChefChat: FC<Props> = ({ onSubmit, isLoading, chatResponse }) => {
  const [prompt, setPrompt] = useState("")
  return (
    <form
      className="w-full max-w-lg my-10"
      onSubmit={(e) => {
        e.preventDefault()
        if (prompt === "") {
          return
        }

        onSubmit(prompt)
        setPrompt("")
      }}
    >
      <label>Ask the chef a question!</label>
      <Textarea
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value)
        }}
      />
      <Button type="submit" disabled={isLoading}>Submit</Button>
      {chatResponse && (
        <div className="my-5">
          <p>{chatResponse}</p>
        </div>
      )}
    </form>
  )
}

export default ChefChat
