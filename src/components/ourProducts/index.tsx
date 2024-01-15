import { useEffect, useState } from "react"
import { productsType } from "../../data"
import ProductCard from "../ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllProductsAsync, getTopSellProductsAsync, searchQueryAsync } from "../../redux/product/productAsyncThunk";
import { selectProducts } from "../../redux/product/productSlice";
import Loader from "../Loader";

interface PType {
    name: string,
    hover: boolean,
    selected: string
}

const OurProducts = () => {
    const [pType, setPType] = useState<PType>({ name: "All", hover: false, selected: "All" });
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);

    const handleHover = (type: string) => {
        setPType({ name: type, hover: true, selected: pType.selected });
    }

    const handleHoverOut = (type: string) => {
        setPType({ name: type, hover: false, selected: pType.selected });
    }

    const handleSet = (type: string) => {
        setPType({ ...pType, selected: type });
        dispatch(searchQueryAsync({type:pType.name.split(" ")[0].toLowerCase()}));
    }

    useEffect(() => {
        dispatch(getAllProductsAsync());
        dispatch(getTopSellProductsAsync())
    }, [])

    return (
        <div className="max-w-6xl mx-auto py-36 text-secondary-color" >
            <h2 className="text-5xl font-bold font-[Teko] px-8 max-[1200px]:text-4xl max-md:text-3xl max-md:text-center max-md:mb-4" >OUR PRODUCTS</h2>
            <div className="flex items-center justify-end max-md:justify-center font-[Teko] max-[1200px]:text-lg max-sm:gap-2 gap-6 text-xl px-8" >
                {
                    productsType.map((type) => (
                        <div onMouseMove={() => handleHover(type.name)} onMouseOut={() => handleHoverOut(type.name)} onClick={() => handleSet(type.name)} key={type.name} className={`${pType.selected === type.name ? "" : "text-secondary-color_3"} cursor-pointer px-1 py-1 relative`} >{type.name} <span className={`absolute ${(pType.selected === type.name || (pType.name === type.name && pType.hover)) ? "bottom_line_ani" : "bottom_line_ani_out"} bg-primary-color bottom-0 left-0 h-1 rounded-md`} /></div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center flex-wrap gap-4 py-12 px-4" >
                {
                    products?.status !== "pending" ? products?.data?.map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))
                        :
                        <div className="w-full h-[50vh]" >
                            <Loader />
                        </div>
                }
            </div>
        </div>
    )
}

export default OurProducts
