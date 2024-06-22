import { Heart, HeartPulse, Soup } from "lucide-react"

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
            <a href="#" className="relative h-32">
              <img 
              src="/iceland.jpg" 
              alt="image de recette" 
              className="rounded-md w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                <Soup size={16} /> 4 portions
              </div>
              <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
                <Heart size={20} className="hover:fill-red-600 hover:text-red-500" />
              </div>
            </a>
            <div className="flex mt-1">
              <p className="font-bold tracking-wide">Poulet grillée</p>
            </div>
            <p className="my-2">Poulet a la oneguen</p>
            <div className="flex gap-2 mt-auto">
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                <HeartPulse size={16} />
                <span className="text-sm tracking-tighter font-semibold">Sans gluten</span>
              </div>
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                <HeartPulse size={16} />
                <span className="text-sm tracking-tighter font-semibold">Bon pour le cœur</span>
              </div>
            </div>
          </div>
  )
}

export default RecipeCard