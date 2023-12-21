import { useState } from "react"
import { MAX_VALUE } from "../../constants";


const Price = () => {
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(MAX_VALUE);

    const handleOnMinValueChange = (value: any) => {
        if (maxValue > parseInt(value)) {
            setMinValue(parseFloat(value));
        }
    }
    const handleOnMaxValueChange = (value: any) => {
        if (parseInt(value) > minValue) {
            setMaxValue(parseFloat(value));
        }
    }

    return (
        <div className="w-full space-y-8 mb-16" >
            <h4 className="text-2xl font-medium pb-4 border-b border-secondary-color_3 font-[Teko]" >Price($)</h4>
            <div className="relative w-full h-[1px] bg-secondary-color" >
                <input onChange={(event) => handleOnMinValueChange(event.target.value)} type="range" className="absolute top-[50%] z-10 -translate-y-[50%] bg-transparent pointer-events-none appearance-none left-0 w-full input_range" value={minValue} min={0} max={MAX_VALUE} />
                <input onChange={(event) => handleOnMaxValueChange(event.target.value)} type="range" className="absolute top-[50%] z-10 -translate-y-[50%] bg-transparent pointer-events-none appearance-none left-0 w-full input_range" value={maxValue} min={0} max={MAX_VALUE} />
                <div style={{ left: `${minValue / MAX_VALUE * 100}%`, width: `${(maxValue - minValue) / MAX_VALUE * 100}%` }} className="absolute top-0 h-[1px] bg-primary-color" />
            </div>
            <div className="flex items-center justify-between mt-6" >
                <div className="w-[100px] text-center py-2 border-2 border-secondary-color_3 text-secondary-color font-medium" >{minValue}</div>
                <span>--</span>
                <div className="w-[100px] text-center py-2 border-2 border-secondary-color_3 text-secondary-color font-medium" >{maxValue}</div>
            </div>
        </div>
    )
}

export default Price
