import Image from "next/image"

export function ProfileCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/img/img-03.jpg? height=48&width=38"
              alt="Profile"
              width={38}
              height={38}
              className="rounded-full"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600">4.8</span>
              </div>
              <h3 className="font-medium text-gray-900">Professional Name</h3>
              <p className="text-sm text-gray-800">Role Title</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Skill 1", "Skill 2"].map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full bg-[#01aae5] text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

