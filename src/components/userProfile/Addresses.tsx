import { MapPinIcon, PlusIcon } from "@heroicons/react/24/solid"


const Addresses = () => {
    return (
        <div className="pb-8 pt-4 border-b border-secondary-color" >
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 w-full py-4" >
                <Address />
                <Address />
                <Address />
            </div>
            <button className="bg-secondary-color/5 text-sm font-semibold hover:-translate-y-1 shadow-md p-2 rounded-lg flex items-center gap-1 smooth_transition" >
                <PlusIcon className="w-4 h-4" /><span>ADD NEW ADDRESS</span>
            </button>
        </div>
    )
}

export default Addresses

export const Address = ({selected}:{selected?:boolean}) => {
    return (
        <div className={`col-span-1 bg-secondary-color/5 shadow-md p-3 ${selected && "border-2 border-primary-color"} rounded-lg smooth_transition`} >
            <p className="inline-flex space-x-1 text-sm" ><div className="w-4 h-4 pt-[0.1rem]" ><MapPinIcon className="w-4 h-4" /></div><span>Mohalla Takiya, Block Wazirganj, Dist Budaun, Uttar Pradesh, INDIA</span></p>
        </div>
    )
} 
