import productImg from "../../assets/images/productDetails.jpg"

const Hero = ({quantity, setQuantity}:{quantity:number, setQuantity:Function}) => {

    const handleDecQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleIncQuantity = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div className="w-full flex max-[900px]:flex-col max-[900px]:gap-10 items-center justify-center" >
            <div className="w-[806px] max-[900px]:w-full space-y-1 h-full overflow-hidden" >
                <div className="w-full h-[420px] overflow-hidden" >
                    <img src={productImg} alt="" className="object-cover object-center w-full h-full" />
                </div>
                <div className="w-full flex items-center justify-start gap-1" >
                    <div className="flex-[0.25] h-20" >
                        <img src={productImg} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="flex-[0.25] h-20" >
                        <img src={productImg} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="flex-[0.25] h-20" >
                        <img src={productImg} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="flex-[0.25] h-20" >
                        <img src={productImg} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                </div>
            </div>
            <div className="flex-grow w-full flex flex-col justify-between items-start gap-8" >
                <div className="space-y-8 px-8 max-[900px]:px-2" >
                    <div className="space-y-5" >
                        <h1 className="text-5xl text-secondary-color font-bold font-[Teko] max-lg:text-4xl max-sm:text-3xl" >26 INCH MOUNTAIN BIKE</h1>
                        <h2 className="text-4xl font-bold font-[Teko] text-primary-color flex max-lg:text-3xl max-sm:text-2xl items-center gap-3" ><span>$1.699</span><span className="text-secondary-color_3 font-semibold line-through text-3xl max-lg:text-2xl max-sm:text-xl" >$1.899</span></h2>
                    </div>
                    <div className="space-y-3" >
                        <div className="flex items-center justify-start gap-3" >
                            <div className="font-medium text-gray-500 text-base" >Color:</div>
                            <div className="flex items-center justify-start pt-1 gap-3" >
                                <span className="w-4 hover:shadow-lg duration-200 transition-all cursor-pointer h-4 rounded-full bg-lime-600" />
                            </div>
                        </div>
                        <div className="space-y-1" >
                            <h2 className="text-base font-medium text-gray-500" >Frame Size:</h2>
                            <div className="flex items-center justify-start gap-3" >
                                <div className="w-14 h-10 hover:shadow-lg duration-200 transition-all cursor-pointer bg-primary-color flex items-center justify-center font-semibold text-secondary-color" >S</div>
                            </div>
                        </div>
                        <div className="space-y-1" >
                            <h2 className="text-base font-medium text-gray-500" >Wheel Size:</h2>
                            <div className="flex items-center justify-start gap-3" >
                                <div className="w-14 h-10 hover:shadow-lg duration-200 transition-all cursor-pointer bg-primary-color flex items-center justify-center font-semibold text-secondary-color" >24</div>
                            </div>
                        </div>
                        <div className="space-y-1" >
                            <h2 className="text-base font-medium text-gray-500" >Quantity:</h2>
                            <div className="text-secondary-color_3 " >
                                <span className="flex w-32 items-center justify-start border-2 border-secondary-color_3 hover:shadow-lg duration-200 transition-all" >
                                    <button disabled={quantity < 1} onClick={() => handleDecQuantity()} className="h-10 w-10 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all" >-</button>
                                    <span className="h-10 w-10 flex items-center font-semibold justify-center" >{quantity}</span>
                                    <button onClick={() => handleIncQuantity()} className="h-10 w-10 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all" >+</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8 max-[900px]:px-2 flex flex-wrap items-center justify-start text-xl font-[Teko] gap-4" >
                    <button className="py-2 px-10 max-lg:px-8 flex items-center justify-center border-2 tracking-wider font-medium hover:shadow-lg duration-200 transition-all text-secondary-color border-primary-color bg-primary-color" >BUY NOW</button>
                    <button className="py-2 px-10 max-lg:px-8 flex items-center justify-center border-2 tracking-wider font-medium hover:shadow-lg duration-200 transition-all text-secondary-color border-primary-color" >ADD TO WISHLIST</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
