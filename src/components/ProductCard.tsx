import { ArrowPathIcon, HeartIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

interface ProductCardType{
    _id:Number,
    image:string,
    price:number,
    discount?:number,
    title:string,
    frameSize:number,
    classs:string,
    nos:number,
    type:string,
    cr:string
}

const ProductCard = ({image, title, price, frameSize, classs, nos, type, cr}:ProductCardType) => {
    return (
        <Link to={`/p/12`} className="min-w-[250px] hover:shadow-lg transition-all duration-200 group px-2 py-6 bg-white shadow-md flex-col justify-center items-center relative" >
            <div className="max-w-[250px] flex items-center justify-center cursor-pointer" >
                <img src={image} alt={title} />
            </div>
            <div className="absolute top-4 right-0 flex items-center justify-end gap-2 px-2" >
                <span><ArrowPathIcon className="w-5 h-5 hover:text-primary-color cursor-pointer transition-all duration-200 font-bold text-secondary-color_3" /></span>
                <span><HeartIcon className="w-5 h-5 hover:text-primary-color cursor-pointer transition-all duration-200 font-bold text-secondary-color_3" /></span>
            </div>
            <div className="px-3 max-w-[250px]" >
                <div className="flex justify-start items-center font-[Teko] gap-3" >
                    <h3 className="text-2xl font-bold text-primary-color" >$${price}</h3>
                    <h4 className="text-lg font-bold text-secondary-color_3 line-through mt-[1px]" >$1.699</h4>
                </div>
                <p className="text-lg font-bold leading-6 max-w-[170px] cursor-pointer hover:text-primary-color transition-all duration-200" >{title}</p>
            </div>
            <div className="pt-4 px-3" >
                <button className="btn hover:shadow-lg text-base mt-3 border-2 font-semibold border-primary-color relative" >
                    BUY NOW
                </button>
            </div>

            {/* Extra details on hover */}
            <div className="hidden group-hover:block group-hover:opacity-100 opacity-0 absolute transition-all duration-200 top-[99%] left-0 text-base font-medium leading-6 text-gray-700 bg-white shadow-lg z-10 w-full px-5 py-6" >
                <p>Frame Size: ${frameSize}</p>
                <p>Class: {classs}</p>
                <p>Number of speeds: {nos}</p>
                <p>Type: {type}</p>
                <p>Company registration: {cr}</p>
            </div>
        </Link>
    )
}

export default ProductCard
