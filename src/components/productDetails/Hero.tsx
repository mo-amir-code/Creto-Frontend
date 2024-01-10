import { useEffect, useRef, useState } from "react";
import { ProductType } from "../componentsTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn, selectLoggedInUser } from "../../redux/auth/authSlice";
import { calculateDiscountedPrice } from "../../services";
import { addToCartAsync } from "../../redux/product/productAsyncThunk";
import { toast } from "react-toastify";
import { selectCart } from "../../redux/product/productSlice";
import Loader from "../Loader";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import ArrowButton from "../categories/ArrowButton";


const Hero = ({ product }: { product: ProductType | null }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors[0])
    const [selectedFrame, setSelectedFrame] = useState<string | undefined>(product?.specs?.frameSize ? product?.specs?.frameSize[0] : undefined)
    const [selectedWheel, setSelectedWheel] = useState<number | undefined>(product?.specs?.wheelSize ? product?.specs?.wheelSize[0] : undefined)
    const [searchParams, setSearchParams] = useSearchParams();
    const loggedInUser = useAppSelector(selectLoggedInUser)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const images = [product?.thumbnail, ...product?.images || []] as [string] | [];
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch();
    const sliderRef = useRef<Slider>(null);


    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }


    const settings = {
        infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500, 
            prevArrow: <ArrowButton left={true} onClick={handlePrev} />,
            nextArrow: <ArrowButton left={false} onClick={handleNext} />,
    };


    const handleAddToCart = () => {
        const data = {
            productId: product?._id || "",
            purchasedUserId: loggedInUser?.userId || "",
            currentPrice: calculateDiscountedPrice(product?.price, product?.discount) || 0,
            color: selectedColor || "",
            frameSize: selectedFrame || "",
            wheelSize: selectedWheel || 0,
            quantity: quantity,
        }
        if (loggedInUser && isLoggedIn) {
            dispatch(addToCartAsync({ data }))
        } else {
            toast.error("Login your account");
        }
    }


    const handleDecQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            searchParams.set("quantity", quantity.toString())
        }
    }

    const handleIncQuantity = () => {
        setQuantity(quantity + 1);
        searchParams.set("quantity", `${quantity + 1}`);
    }

    const handleSelectColor = (sColor: string) => {
        setSelectedColor(sColor);
        searchParams.set("color", sColor);
    }

    const handleSelectFrameSize = (sFrame: string) => {
        setSelectedFrame(sFrame);
        searchParams.set("frameSize", sFrame);
    }

    const handleSelectWheelSize = (wheel: number) => {
        setSelectedWheel(wheel);
        searchParams.set("wheelSize", wheel.toString());
    }

    useEffect(() => {
        setSearchParams(searchParams)
    }, [selectedColor, selectedFrame, selectedWheel, quantity])

    useEffect(() => {
        const color = searchParams.get('color');
        const frameSize = searchParams.get('frameSize');
        const wheelSize = searchParams.get('wheelSize');
        const quantity = searchParams.get('quantity');

        if (color) {
            setSelectedColor(color);
        }

        if (frameSize) {
            setSelectedFrame(frameSize)
        }

        if (wheelSize) {
            setSelectedWheel(parseInt(wheelSize));
        }

        if (quantity) {
            setQuantity(parseInt(quantity));
        }

    }, [])

    return (
        <div className="w-full flex max-[900px]:flex-col max-[900px]:gap-10 items-center justify-center" >
            <div className="w-[806px] max-[900px]:w-full space-y-1 h-full overflow-hidden" >
                <div className="w-full h-[420px] overflow-hidden" >
                    <Slider {...settings} ref={sliderRef} >
                        {
                            images?.map((image, index) => {
                                return (
                                    <div key={index} className="w-full h-[420px] overflow-hidden" >
                                        <img src={image} alt={product?.title} className="object-cover object-center w-full h-full" />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className="w-full flex items-center justify-start gap-1" >
                    {product?.images?.map((image, idx) => (
                        <div className="flex-[0.25] h-20" key={idx} >
                            <img src={image} alt={product?.title} className="object-cover object-center w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-grow w-full flex flex-col justify-between items-start gap-8" >
                <div className="space-y-8 px-8 max-[900px]:px-2" >
                    <div className="space-y-5 font-bold font-[Teko]" >
                        <h1 className="text-5xl text-secondary-color font-bold font-[Teko] max-lg:text-4xl max-sm:text-3xl" >{product?.title}</h1>
                        <h2 className="text-4xl  text-primary-color flex max-lg:text-3xl max-sm:text-2xl items-center gap-3" ><span>${calculateDiscountedPrice(product?.price, product?.discount)}</span><span className="text-secondary-color_3 font-semibold line-through text-3xl max-lg:text-2xl max-sm:text-xl" >${product?.price}</span></h2>
                        <span className="text-red-600 pl-1 font-semibold text-xl max-lg:text-2xl max-sm:text-xl" >{(product?.discount && product?.discount/product?.price*100)?.toFixed(2)}% Off</span>
                    </div>
                    <div className="space-y-3" >
                        <div className="flex items-center justify-start gap-3" >
                            <div className="font-medium text-gray-500 text-base" >Color:</div>
                            <div className="flex items-center justify-start pt-1 gap-3" >
                                {
                                    product?.colors?.map((color, idx) => (
                                        <span key={idx} onClick={() => handleSelectColor(color)} style={{ backgroundColor: `${color}` }} className={`w-4 ${selectedColor === color && "scale-125 border border-primary-color"} hover:scale-110 hover:shadow-lg duration-200 transition-all cursor-pointer h-4 rounded-full`} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="space-y-1" >
                            <h2 className="text-base font-medium text-gray-500" >Frame Size:</h2>
                            <div className="flex items-center flex-wrap justify-start gap-3" >
                                {
                                    product?.specs?.frameSize?.map((frame: string, idx: number) => (
                                        <div key={idx} onClick={() => handleSelectFrameSize(frame)} className={`w-14 h-10 hover:shadow-lg ${selectedFrame === frame && "shadow-lg border border-secondary-color"} duration-200 transition-all cursor-pointer bg-primary-color flex items-center justify-center font-semibold text-secondary-color`} >{frame}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="space-y-1" >
                            <h2 className="text-base font-medium text-gray-500" >Wheel Size:</h2>
                            <div className="flex items-center flex-wrap justify-start gap-3" >
                                {
                                    product?.specs?.wheelSize?.map((wheel: number, idx: number) => (
                                        <div key={idx} onClick={() => handleSelectWheelSize(wheel)} className={`w-14 h-10 hover:shadow-lg duration-200 ${selectedWheel === wheel && "shadow-lg border border-secondary-color"} transition-all cursor-pointer bg-primary-color flex items-center justify-center font-semibold text-secondary-color`} >{wheel}</div>
                                    ))
                                }
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
                    <button onClick={handleAddToCart} className="py-2 h-full px-10 max-lg:px-8 flex items-center justify-center border-2 tracking-wider font-medium hover:shadow-lg duration-200 transition-all text-secondary-color border-primary-color" ><span className="w-24 flex items-center justify-center" >{cart?.status === "pending" ? <div className="w-8 h-6" ><Loader /></div> : "ADD TO CART"}</span></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
