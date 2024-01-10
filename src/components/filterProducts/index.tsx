import { useEffect, useState } from "react"
import { sortByData } from "../../data"
import { ITEM_PER_PAGE } from "../../constants";
import ProductCard from "../ProductCard"
import { DropDown } from "../hero/FindBike";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Bike from "./Bike";
import Price from "./Price";
import Colors from "./Colors";
import CartSection from "./Cart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectFilterProducts } from "../../redux/product/productSlice";
import { getAllProductsAsync, searchByQueryAsync } from "../../redux/product/productAsyncThunk";
import { useSearchParams } from "react-router-dom";
import NoData from "../NoData";
import Loader from "../Loader";
// import { ProductType } from "../componentsTypes";

// const getColors = ({products}:{products:ProductType[]}) => {
//     return products?.reduce((colors, curr) => {
//         curr.colors.forEach((clr)=>{
//             if(!colors.includes(clr)){
//                 colors.push(clr);
//             }
//         })
//         return colors;
//     }, [] as string[]);
// }

const FilterProducts = () => {
    const [sortBy, setSortBy] = useState(sortByData[0].name);
    const [isSortByOpen, setIsSortByOpen] = useState<boolean>(false);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const products = useAppSelector(selectFilterProducts);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(searchByQueryAsync({ query: searchParams.toString() }));
    }, [searchParams]);

    useEffect(() => {
        // const sortVal = searchParams.get('sortby');
        // if(sortVal){
        //     if(sortVal === "new" || sortVal === "top"){
        //         setSortBy(`${sortVal.charAt(0).toUpperCase() + sortVal.slice(1, sortBy.length)} Products`);
        //     }else if(sortVal === "lowest" || sortVal === "highest"){
        //         setSortBy(`${sortVal.charAt(0).toUpperCase() + sortVal.slice(1, sortBy.length)} First`);
        //     }else{
        //         searchParams.set('sortby', sortBy.split(' ')[0].toLowerCase());
        //         setSearchParams(searchParams);
        //         setSortBy(sortByData[0].name);
        //     }
        // }
        dispatch(getAllProductsAsync())
    }, []);

    useEffect(() => {
        searchParams.set('sortby', sortBy.split(' ')[0].toLowerCase());
        setSearchParams(searchParams);
    }, [sortBy]);

    return (
        <div className="max-w-6xl w-full mx-auto py-20 text-secondary-color" >
            <div className="flex items-start max-md:flex-col max-md:gap-8 max-md:justify-start max-md:items-center w-full" >
                <div onClick={() => setIsFilterOpen(!isFilterOpen)} className="px-4 cursor-pointer w-full hidden max-md:block" >
                    <div className="w-full py-3 border-2 border-primary-color text-xl flex font-medium font-[Teko] items-center justify-center" >
                        FILTER
                    </div>
                </div>
                <div className={`flex-[0.25] max-md:flex-1 max-md:mx-auto transition-all ${!isFilterOpen && "max-md:hidden"} duration-300 max-md:max-w-full max-w-[400px] w-full max-md:mb-20`} >
                    <div className={`w-full px-4 enter_from_left transition-all duration-300`} >
                        <CartSection />
                        <Bike />
                        <Price />
                        <Colors  />
                        <FilterReset setSearchParams={setSearchParams} />
                    </div>
                </div>
                <div className="flex-[0.75] max-md:flex-1 transition-all duration-300" >
                    <div>
                        <h2 className="text-5xl font-bold font-[Teko] px-4 max-[1200px]:text-4xl max-md:text-2xl" >ROAD BIKE</h2>
                        <div className="w-full flex items-center justify-between px-4" >
                            <p className="text-lg font-normal text-secondary-color_3 max-md:text-sm" >{products?.totalCount} products found</p>
                            <div className="flex items-center justify-end" >
                                <div className="text-xl max-md:text-base space-x-2 font-normal text-secondary-color/60 relative font-[Teko] flex items-center" ><span>Sort By:</span><div className="font-bold text-secondary-color cursor-pointer flex items-center justify-center" onClick={() => setIsSortByOpen(!isSortByOpen)} >
                                    {sortBy}
                                    <DropDown list={sortByData} isFilter={true} setSelected={setSortBy} open={isSortByOpen} />
                                    <ChevronDownIcon className={`w-4 h-4 ${isSortByOpen ? "rotate-180" : "rotate-0"} transition-all duration-200`} />
                                </div></div>
                            </div>
                        </div>
                        <div className="flex justify-center w-full flex-wrap gap-4 py-12 px-4" >
                            {
                                products?.data?.length > 0 ? products?.status !== "pending"? products?.data?.map((product) => (
                                    <ProductCard key={product._id} {...product} />
                                )) : <div className="w-full h-[50vh]" >
                                    <Loader />
                                </div>
                                :
                                <NoData subline="Products Not Found" />
                            }
                        </div>
                    </div>
                    <Pagination totalPage={products.totalCount} searchParams={searchParams} setSearchParams={setSearchParams} />
                </div>
            </div>
        </div>
    )
}

const FilterReset = ({ setSearchParams }: { setSearchParams: Function }) => {

    const handleResetFilters = () => {
        const newSearchParams = new URLSearchParams();
        newSearchParams.set("page", "1");
        newSearchParams.set("limit", "12");
        newSearchParams.set("sortby", "new")
        setSearchParams(newSearchParams);
        window.location.reload();
    }

    return (
        <div>
            <h3 onClick={handleResetFilters} className="text-lg cursor-pointer font-normal" >Reset Filters</h3>
        </div>
    )
}

const Pagination = ({totalPage, searchParams, setSearchParams}:{totalPage:number, searchParams:any, setSearchParams:Function}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);


    const handlePage = (n:any) => {
        setCurrentPage(n);
        searchParams.set("page", n);
        setSearchParams(searchParams)
    }

    useEffect(() => {
        const currPage = searchParams.get("page");
        const itemLimit = searchParams.get("limit");
        if(currPage){
            setCurrentPage(parseInt(currPage));
        }else{
            searchParams.set("page", 1);
        }
        if(!itemLimit){
            searchParams.set("limit", ITEM_PER_PAGE)
        }
        setSearchParams(searchParams);
    }, [searchParams])
    
    return (
        <div className="w-full flex items-center justify-center font-[Teko] gap-3" >
            <span className="w-10 h-10 smooth_transition hover:shadow-lg hover:bg-primary-color flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer" ><ChevronLeftIcon className="w-4 h-4" /></span>
            {
                Array.from({ length: Math.ceil(totalPage/ITEM_PER_PAGE) }, (_, index) => index + 1).map((n) => {
                    if(n <= 10){
                        return <span key={n} onClick={()=>handlePage(n)} className={`w-10 h-10 ${currentPage === n && "bg-primary-color shadow-lg"} flex hover:shadow-lg items-center justify-center font-bold border-2 border-secondary-color_3 cursor-pointer smooth_transition`} >{n}</span>
                    }else if(n == 11){
                         return <span key={n} className={`w-10 h-10 flex hover:shadow-lg items-end justify-center font-bold cursor-pointer smooth_transition`} >...</span>
                    }
                  })
            }
            <span className="w-10 h-10 smooth_transition hover:shadow-lg hover:bg-primary-color flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer" ><ChevronRightIcon className="w-4 h-4" /></span>
        </div>
    )
}

export default FilterProducts
