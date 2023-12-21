import { useState } from "react"
import { productCardsData, sortByData } from "../../data"
import ProductCard from "../ProductCard"
import { DropDown } from "../hero/FindBike";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CartSection from "./cartSection";
import Bike from "./Bike";
import Price from "./Price";
import Colors from "./Colors";


const FilterProducts = () => {
    const [sortBy, setSortBy] = useState(sortByData[0].name);
    const [isSortByOpen, setIsSortByOpen] = useState(false);

    return (
        <div className="max-w-6xl w-full mx-auto py-20 text-secondary-color" >
            <div className="flex items-start w-full" >
                <div className="flex-[0.25]" >
                    <div className="w-full px-4" >
                        <CartSection />
                        <Bike />
                        <Price />
                        <Colors />
                        <FilterReset />
                    </div>
                </div>
                <div className="flex-[0.75]" >
                    <div>
                        <h2 className="text-5xl font-bold font-[Teko] px-4 max-[1200px]:text-4xl max-md:text-3xl" >ROAD BIKE</h2>
                        <div className="w-full flex items-center justify-between px-4" >
                            <p className="text-lg font-normal text-secondary-color_3" >120 products found</p>
                            <div className="flex items-center justify-end" >
                                <div className="text-xl space-x-2 font-normal text-secondary-color/60 relative font-[Teko] flex items-center" ><span>Sort By:</span><div className="font-bold text-secondary-color cursor-pointer flex items-center justify-center" onClick={() => setIsSortByOpen(!isSortByOpen)} >
                                    {sortBy}
                                    <DropDown list={sortByData} isFilter={true} setSelected={setSortBy} open={isSortByOpen} />
                                    <ChevronDownIcon className={`w-4 h-4 ${isSortByOpen ? "rotate-180" : "rotate-0"} transition-all duration-200`} />
                                </div></div>
                            </div>
                        </div>
                        <div className="w-full justify-center flex items-center flex-wrap gap-4 py-12 px-4" >
                            {
                                productCardsData.map((card) => (
                                    <ProductCard key={card._id} {...card} />
                                ))
                            }
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

const FilterReset = () => {
    return (
        <div>
            <h3 className="text-lg cursor-pointer font-normal" >Reset Filters</h3>
        </div>
    )
}

const Pagination = () => {
    return (
        <div className="w-full flex items-center justify-center gap-3" >
            <span className="w-10 h-10 flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer" ><ChevronLeftIcon className="w-4 h-4" /></span>
            <span className="w-10 h-10 flex items-center justify-center font-[Teko] bg-primary-color font-bold border-2 border- cursor-pointersecondary-color_3" >1</span>
            <span className="w-10 h-10 flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer" >2</span>
            <span className="w-10 h-10 flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer" >3</span>
            <span className="w-10 h-10 flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer" >4</span>
            <span className="w-10 h-10 flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer" ><ChevronRightIcon className="w-4 h-4" /></span>
        </div>
    )
}

export default FilterProducts
