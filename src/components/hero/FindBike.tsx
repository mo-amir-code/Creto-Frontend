import { useState } from "react"
import { dropdownTypedata, dropdownSizedata, dropdownBranddata } from "../../data"
import { ChevronDownIcon } from "@heroicons/react/20/solid";


const FindBike = () => {
    const [selectedType, setSelectedType] = useState(dropdownTypedata[0]);
    const [selectedSize, setSelectedSize] = useState(dropdownSizedata[0]);
    const [selectedBrand, setSelectedBrand] = useState(dropdownBranddata[0]);
    const [isTypeOpen, setIsTypeOpen] = useState(false)
    const [isBrand, setIsBrand] = useState(false)
    const [isWheelSize, setIsWheelSize] = useState(false)

    return (
        <div className="absolute top-[90%] left-0 flex items-center justify-center w-full" >
            <div className="max-w-5xl max-[1200px]:max-w-4xl max-[940px]:max-w-2xl max-md:max-w-lg max-sm:max-w-xs max-[360px]:max-w-[260px] w-full bg-white shadow-md text-secondary-color py-12" >
                <h2 className="text-center font-[Teko] font-bold text-5xl max-[1200px]:text-3xl max-sm:text-2xl" >FIND THE BIKE</h2>
                <form className="px-8 flex items-center text-gray-500 gap-8 mt-14 flex-wrap" >
                    {/* <div>
                        <p className="text-lg font-semibold text-secondary-color_3" >Type</p>
                    </div> */}
                    <div onClick={() => setIsTypeOpen(!isTypeOpen)} className="px-6 flex-1 py-3 border border-secondary-color_3 cursor-pointer relative" >
                        <h5 className="font-bold text-base min-w-[200px] max-sm:text-sm max-sm:min-w-[100px] w-full flex items-center justify-between gap-6" >{selectedType.name} <ChevronDownIcon className={`w-6 h-6 ${isTypeOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} /></h5>
                        <DropDown list={dropdownTypedata} isFilter={false} open={isTypeOpen} setSelected={setSelectedType} />
                    </div>
                    <div onClick={() => setIsWheelSize(!isWheelSize)} className="px-6 flex-1 py-3 border border-secondary-color_3 cursor-pointer relative" >
                        <h5 className="font-bold text-base min-w-[200px] max-sm:text-sm max-sm:min-w-[100px] w-full flex items-center justify-between gap-6" >{selectedSize.name} <ChevronDownIcon className={`w-6 h-6 ${isWheelSize ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} /></h5>
                        <DropDown list={dropdownSizedata} isFilter={false} open={isWheelSize} setSelected={setSelectedSize} />
                    </div>
                    <div onClick={() => setIsBrand(!isBrand)} className="px-6 flex-1 py-3 border border-secondary-color_3 cursor-pointer relative" >
                        <h5 className="font-bold text-base min-w-[200px] max-sm:text-sm max-sm:min-w-[100px] w-full flex items-center justify-between gap-6" >{selectedBrand.name} <ChevronDownIcon className={`w-6 h-6 ${isBrand ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} /></h5>
                        <DropDown list={dropdownBranddata} isFilter={false} open={isBrand} setSelected={setSelectedBrand} />
                    </div>
                    <div className="px-6 text-black cursor-pointer hover:shadow-lg duration-200 transition-all py-3 min-w-[200px] max-sm:min-w-[100px] flex-1 flex items-center justify-center border-2 tracking-widest font-bold border-primary-color" >
                        <button>SEARCH</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

interface DropDownType {
    name: string | number,
    value: string | number,
}

export function DropDown({ list, open, setSelected, isFilter }: { list: DropDownType[], open: boolean, setSelected: Function, isFilter:boolean }) {
    const handleOnClick = (el:{name:string | number, value:string | number}) => {
        if(isFilter){
            setSelected(el.name);
        }else{
            setSelected(el)
        }
    }

    return (
        <div className={`w-full ${open ? "dropdown_in" : "dropdown_out"}  font-medium text-sm absolute top-[105%] border border-secondary-color_3 left-0 bg-white z-40`} >
            {
                list.map((el) => (
                    <li onClick={()=>handleOnClick(el)} key={el.value} className="px-5 py-2 hover:font-bold list-none hover:bg-secondary-color_5" >{el.name}</li>
                ))
            }
        </div>
    )
}

export default FindBike
