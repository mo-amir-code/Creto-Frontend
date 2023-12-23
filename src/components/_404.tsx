import { Link } from "react-router-dom"
import advantage from "../assets/advantages/advantages_bike.jpg"

const _404 = () => {
  return (
    <div className="w-full h-screen border-t border-secondary-color_3 relative font-[Teko] text-white overflow-hidden" >
            <img src={advantage} alt="advantages" className="object-cover object-center w-full h-full" />
            <div className="w-full h-full absolute top-0 left-0 bg-secondary-color/90 flex flex-col items-center justify-center" >
              <h1 className="text-5xl font-bold text-white" >404 NOT FOUND</h1>
              <Link to={"/"} className="px-8 py-2 text-lg bg-primary-color hover:shadow-lg text-secondary-color font-medium" >Go Home</Link>
            </div>
            <div className="absolute -top-4 left-0 w-full h-8 bg-white rotate-1" />
            <div className="absolute bottom-0 left-0 w-[200%] h-20 bg-white -rotate-3 translate-x-48 translate-y-12 max-[1200px]:translate-x-28 max-md:translate-x-0" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-white rotate-6 -translate-x-[40rem] translate-y-12" />
        </div>
  )
}

export default _404
