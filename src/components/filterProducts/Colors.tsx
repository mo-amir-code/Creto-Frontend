import { useState } from "react"
import { colors } from "../../data"


const Colors = () => {
    const [color, setColor] = useState<string | null>(null);
    const handleSelectColor = (code:string):void => {
        setColor(code);
        console.log(color);
        
    }

    return (
        <div className="w-full space-y-8 mb-16" >
            <h4 className="text-2xl font-medium pb-4 border-b border-secondary-color_3 font-[Teko]" >Colors</h4>
            <div className="flex items-center justify-around" >
                {
                    colors.map((color)=>(
                        <span key={color.code} onClick={()=>handleSelectColor(color.code)} className="w-6 h-6 rounded-full cursor-pointer hover:scale-95 transition-all duration-100" style={{backgroundColor: color.code}} />
                    ))
                }                
            </div>
        </div>
    )
}

export default Colors
