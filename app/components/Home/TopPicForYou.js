import { Movise } from "@/app/MoliseList/List";
import MovieBannerLinearDesign from "./MovieBannerLinearDesign";
export default function TopPicForYou() {
  return (
    <div className="w-full p-2 flex flex-col items-center">
            <p className="w-full max-w-[calc(100%-100px)] mt-4 mb-4 font-extrabold">For You</p>
            <div className="w-full grid grid-cols-5 ResponsiveMovies">
                {
                    Movise.slice(0,4).map((data)=><MovieBannerLinearDesign data={data}/>)
                }
    
            </div>
        </div>
  )
}
