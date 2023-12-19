import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"


const ArrowButton = ({left, onClick}:{left:boolean, onClick:Function}) => {
  return (
    <button onClick={()=>onClick()} className={`absolute top-1/2 transform -translate-y-1/2 ${left? "left-0" : "right-0"} z-10 w-16 h-16 max-sm:w-12 max-sm:h-12 hover:bg-secondary-color hover:text-white transition-all duration-200 bg-primary-color flex items-center justify-center`} >
        {left?<ChevronLeftIcon className="w-8 h-8" /> : <ChevronRightIcon className="w-8 h-8" />}
    </button>
  )
}

export default ArrowButton
