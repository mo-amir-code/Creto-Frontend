import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { selectRelatedProducts } from "../../redux/product/productSlice"
import ProductCard from "../ProductCard"
import { getRelatedProductsAsync } from "../../redux/product/productAsyncThunk";

const RelatedProducts = ({ type }: { type: string | undefined }) => {
    const relatedProducts = useAppSelector(selectRelatedProducts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (type) {
            dispatch(getRelatedProductsAsync({ type }));
        }
    }, [])

    return (
        <div className="w-full py-12" >
            <h2 className="text-5xl font-bold font-[Teko] px-8 max-[1200px]:text-4xl max-md:text-3xl max-md:text-center max-md:mb-4" >RELATED PRODUCTS</h2>
            <div className="flex items-center justify-center flex-wrap gap-4 py-12" >
                {
                    relatedProducts?.data?.map((card) => (
                        <ProductCard key={card._id} {...card} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts
