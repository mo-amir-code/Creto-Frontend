
import { useAppSelector } from "../../redux/hooks";
import { selectTopSellProducts } from "../../redux/product/productSlice";
import ProductCard from "../ProductCard";

const TopSale = () => {
    const topSellProducts = useAppSelector(selectTopSellProducts);


    return (
        <div className="max-w-6xl mx-auto py-36 text-secondary-color" >
            <h2 className="text-5xl font-bold font-[Teko] px-8 max-[1200px]:text-4xl max-md:text-3xl max-md:text-center max-md:mb-4" >TOP SALE</h2>
            <div className=" flex items-center flex-wrap gap-4 py-12 px-4" >
                {
                    topSellProducts?.data?.map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))
                }
            </div>
        </div>
    )
}

export default TopSale
