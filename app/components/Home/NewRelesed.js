import { Movise } from "@/app/MoliseList/List"
import MovieBannerLinearDesign from "./MovieBannerLinearDesign"
export default function NewRelesed() {
  const Movies=Movise.sort((a,b)=>new Date(b.releaseDate)-new Date(a.releaseDate))
  Movies.length=5
  return (
    <div className="w-full p-2 flex flex-col items-center">
            <p className="w-full max-w-[calc(100%-100px)] mt-4 mb-4 font-extrabold  border-white  ">New Relesed</p>
            <div className="w-full grid grid-cols-5 ResponsiveMovies">
                {
                    Movies.map((data)=><MovieBannerLinearDesign data={data}/>)
                }
    
            </div>
        </div>
  )
}
