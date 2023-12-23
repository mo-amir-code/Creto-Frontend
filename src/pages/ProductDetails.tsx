import { useState } from "react"
import Hero from "../components/productDetails/Hero";
import Tab from "../components/productDetails/Tab";
import Description from "../components/productDetails/Description";
import RelatedProducts from "../components/productDetails/RelatedProducts";




const ProductDetails = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [tabSelected, setTabSelected] = useState<number>(1);



    return (
        <div className="max-w-6xl mx-auto w-full py-16 px-4 space-y-8" >
            <Hero quantity={quantity} setQuantity={setQuantity} />
            <div className="space-y-6" >
                <Tab tabSelected={tabSelected} setTabSelected={setTabSelected} />
                <Description />
            </div>
            <RelatedProducts />
        </div>
    )
}

export default ProductDetails
