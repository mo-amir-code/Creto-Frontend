import Button from "../buttons/Button"
import { useState } from "react"

interface CategoryType{
    type:string,
    img:string
}

const Category = ({type, img}:CategoryType) => {
    const [hover, setHover] = useState<boolean>(false)

    const handleHoverIn = ():void => {
        setHover(true);
    }

    const handleHoverOut = ():void => {
        setHover(false);
    }

    return (
        <div className="min-w-[300px] flex-1 mx-1 my-3" >
            <div onMouseOver={handleHoverIn} onMouseOut={handleHoverOut} className="w-full flex items-center justify-between bg-white shadow-md relative overflow-hidden" >
                <div className="font-[Teko] absolute top-[27%] left-8 z-20" >
                    <h4 className="text-3xl font-bold max-w-[160px] leading-6" >{type}</h4>
                    <Button text="VIEW MORE" />
                </div>
                <div className="max-h-[220px] w-full flex items-center z-10 justify-end" >
                    <img src={img} alt={type} className="object-cover" />
                </div>
                <div className="absolute top-0 right-0 flex items-center justify-end w-full h-full pb-36" ><span className={`text-[30rem] font-bold ${hover? "translate-x-16 opacity-100" : "translate-x-24 opacity-0"} transition-all duration-500 text-primary-color`} >x</span></div>
            </div>
        </div>
    )
}

export default Category
