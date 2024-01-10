import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { colors } from "../../data";


const Colors = () => {
    const [color, setColor] = useState<string | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSelectColor = (code:string):void => {
        if(color?.toString() === code.toString()){
            setColor(null)
            searchParams.delete("color");
        }else{
            searchParams.set("color", code);
            setColor(code);
        }
        setSearchParams(searchParams);
    }

    return (
        <div className="w-full space-y-8 mb-16" >
            <h4 className="text-2xl font-medium pb-4 border-b border-secondary-color_3 font-[Teko]" >Colors</h4>
            <div className="flex items-center justify-start flex-wrap gap-2" >
                {
                    colors.map((clr)=>(
                        <span key={clr} onClick={()=>handleSelectColor(clr)} className={`w-6 h-6 shadow-lg rounded-full ${clr === color && "border border-primary-color scale-110"} cursor-pointer hover:scale-110 smooth_transition`} style={{backgroundColor: clr}} />
                    ))
                }                
            </div>
        </div>
    )
}

export default Colors
