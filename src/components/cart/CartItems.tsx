import { TrashIcon, HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import { CartDataType, CartItemObjectType } from "../../redux/product/productTypes"
import { useAppDispatch } from "../../redux/hooks"
import { deleteCartAsync, editCartAsync } from "../../redux/product/productAsyncThunk"

const CartItems = ({cart}:{cart:[CartDataType] | []}) => {
    

    return (
        <div className="flex-[0.65] w-full mx-2 max-md:mx-0 px-4 rounded-lg shadow-lg py-4 space-y-4" >
            {
                cart?.map((item)=>(
                    <CartItem cartItem={item} />
                ))
            }
        </div>
    )
}

const CartItem = ({cartItem}:{cartItem:CartDataType}) => {
    const dispatch = useAppDispatch()


    const handleDeleteCart = () => {
        if(cartItem._id){
            dispatch(deleteCartAsync({cartId:cartItem._id}))
        }
    }

    const handleDecreaseQuantity = () => {
        if(cartItem._id)
        dispatch(editCartAsync({cartId:cartItem._id, quantity: cartItem?.quantity - 1}))
    }

    const handleIncreaseQuantity = () => {
        if(cartItem._id)
        dispatch(editCartAsync({cartId:cartItem._id, quantity: cartItem?.quantity + 1}))
    }

    return (
        <div className="w-full" >
            <div className="flex border-b border-secondary-color py-4 max-md:flex-col max-md:gap-6" >
                <div className="w-[250px] max-md:w-full h-[300px] rounded-lg overflow-hidden shadow-lg" >
                    <img src={(cartItem?.productId as CartItemObjectType).thumbnail} alt={"cart product"} className="h-full w-full object-cover" />
                </div>
                <div className="flex-grow" >
                    <div className="max-md:space-y-2 flex flex-col justify-between h-full" >
                        <div className="w-full text-secondary-color flex justify-between px-4 max-md:px-2" >
                            {/* Product details */}
                            <div className="flex flex-col justify-between items-start" >
                                <div>
                                    <h2 className="font-[Teko] text-2xl font-semibold max-sm:text-lg hover:text-primary-color smooth_transition" >Mountain Bike With Gears</h2>
                                    <div>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >FRAME: <span className="font-bold" >{cartItem?.frameSize}</span></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs flex items-center justify-start gap-2" ><span>COLOR:</span> <span style={{backgroundColor: `${cartItem?.color}`}} className="w-3 hover:shadow-lg smooth_transition h-3 rounded-full" /></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >NUMBER OF SPEED: <span className="font-bold" >{(cartItem?.productId as CartItemObjectType).specs?.nos}</span></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >TYPE: <span className="font-bold" >{(cartItem?.productId as CartItemObjectType).type}</span></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >COUNTRY REGISTRATION: <span className="font-bold" >{(cartItem?.productId as CartItemObjectType).specs?.cr}</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Product Cost, Quantity */}
                            <div className="flex flex-col items-end space-y-4" >
                                <div className="space-y-1" >
                                    <h3 className="text-base font-medium text-secondary-color text-end max-sm:text-sm" >Quantity:</h3>
                                    <div className="text-secondary-color_3 " >
                                        <span className="flex w-32 items-center justify-start border-2 border-secondary-color_3 hover:shadow-lg duration-200 transition-all" >
                                            <button onClick={()=>handleDecreaseQuantity()} className="h-10 w-10 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all" >-</button>
                                            <span className="h-10 w-10 flex items-center font-semibold justify-center" >{cartItem?.quantity}</span>
                                            <button onClick={()=>handleIncreaseQuantity()} className="h-10 w-10 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all" >+</button>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-secondary-color text-end max-sm:text-sm" >Total</h3>
                                    <h3 className="text-base font-medium text-secondary-color max-sm:text-sm" >${cartItem?.currentPrice}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-4 max-md:px-2 items-center justify-start gap-2 flex-wrap" >
                            <button onClick={handleDeleteCart} className=" px-5 py-2 bg-primary-color rounded-lg hover:-translate-y-2 shadow-lg smooth_transition flex items-center justify-center gap-1 text-secondary-color font-[Teko] font-semibold" ><TrashIcon className="w-4 h-4" /><span className="pt-1" >REMOVE</span></button>
                            <button className=" px-5 py-2 rounded-lg smooth_transition flex items-center justify-center gap-1 text-secondary-color font-[Teko] font-semibold" ><HeartIconSolid className="w-4 h-4 text-red-600" /><span className="pt-1" >WISHLIST</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
