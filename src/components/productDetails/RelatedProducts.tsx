import { productCardsData } from "../../data"
import ProductCard from "../ProductCard"

const RelatedProducts = () => {
    return (
        <div className="w-full py-12" >
            <h2 className="text-5xl font-bold font-[Teko] px-8 max-[1200px]:text-4xl max-md:text-3xl max-md:text-center max-md:mb-4" >RELATED PRODUCTS</h2>
            <div className="w-full justify-center flex items-center flex-wrap gap-4 py-12" >
                {
                    productCardsData.map((card) => (
                        <ProductCard key={card._id} {...card} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts
