import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function SearchBar() {
  return (
    <div className="flex w-full max-w-lg items-center space-x-2">
      <Input type="text" placeholder="What would you like to cook?" />
      <Button>Search</Button>
    </div>
  )
}
