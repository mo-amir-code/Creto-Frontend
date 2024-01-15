import { useEffect, useState } from "react"
import Hero from "../components/productDetails/Hero";
import Tab from "../components/productDetails/Tab";
import Description from "../components/productDetails/Description";
import RelatedProducts from "../components/productDetails/RelatedProducts";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProduct } from "../redux/product/productSlice";
import { getProductByIdAsync } from "../redux/product/productAsyncThunk";
import Loader from "../components/Loader";




const ProductDetails = () => {
    const [tabSelected, setTabSelected] = useState<number>(1);
    const {productId}  = useParams();
    const product = useAppSelector(selectProduct)
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        if(productId){
            dispatch(getProductByIdAsync({productId}));
        }
    }, [productId])

    if(product.status === "pending"){
        return (
            <div className="h-[70vh] w-full" >
                <Loader />
            </div>
        )
    }


    return (
        <div className="max-w-6xl mx-auto w-full py-16 px-4 space-y-8" >
            <Hero product={product.data} />
            <div className="space-y-6" >
                <Tab tabSelected={tabSelected} setTabSelected={setTabSelected} />
                <Description product={product?.data} />
            </div>
            <RelatedProducts type={product?.data?.type} />
        </div>
    )
}

export default ProductDetails
