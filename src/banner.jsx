import imgBanner from "./assets/vector1.png"
import imgBanner2 from "./assets/vector2.png"

export default function Banner(){
    return(
        <div className=" flex items-center justify-between max-w-450 mx-auto p-10 text-center">
            <div className="relative rounded-xl p-30 pr-160 text-white 
        bg-linear-to-r from-purple-600 to-indigo-500 
        overflow-hidden shadow-lg">
            <img src={imgBanner} alt="" className="absolute top-0 right-0 w-full h-full object-cover opacity-20"/>
          <div className="relative">
            <h1 className="text-lg font-medium text-center">In-Progress</h1>
            <h1 className="text-5xl font-bold mt-2 text-center">0</h1>
          </div>
        </div>

        <div className="relative rounded-xl p-30 pr-160 text-white 
        bg-linear-to-r from-green-400 to-teal-600 
        overflow-hidden shadow-lg">
            <img src={imgBanner2} alt="" className="absolute top-0 right-0 w-full h-full object-cover opacity-20"/>
          <div className="relative">
            <h1 className="text-lg font-medium text-center">Resolved</h1>
            <h1 className="text-5xl font-bold mt-2 text-center">0</h1>
          </div>
        </div>

        </div>
    )
}