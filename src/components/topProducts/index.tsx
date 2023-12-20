
import ProductCard from "../ProductCard";
import { productCardsData } from "../../data";

const TopSale = () => {
    return (
        <div className="max-w-6xl mx-auto py-36 text-secondary-color" >
            <h2 className="text-5xl font-bold font-[Teko] px-8 max-[1200px]:text-4xl max-md:text-3xl max-md:text-center max-md:mb-4" >TOP SALE</h2>
            <div className="w-full justify-center flex items-center flex-wrap gap-4 py-12 px-4" >
                {
                    productCardsData.map((card) => (
                        <ProductCard key={card._id} {...card} />
                    ))
                }
            </div>
        </div>
    )
}

export default TopSale
