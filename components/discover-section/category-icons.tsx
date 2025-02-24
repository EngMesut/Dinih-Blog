export function CategoryIcons() {
  const categories = [
    "Developer",
    "Designer",
    "Project Manager",
    "UI Designer",
    "Accountant",
    "Human Resource",
    "Marketing",
  ]

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-12">
      {categories.map((category) => (
        <div key={category} className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#01aae5]/20" />
          </div>
          {category}
        </div>
      ))}
    </div>
  )
}

