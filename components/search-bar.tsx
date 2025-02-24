import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input placeholder="e.g. " className="pl-10 h-12 border-gray-200" />
      </div>
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input placeholder="e.g. Mogadishu, SOM" className="pl-10 h-12 border-gray-200" />
      </div>
      <Button className="h-12 px-8 bg-[#01aae5] hover:bg-[#01aae5]/90">Search</Button>
    </div>
  )
}

