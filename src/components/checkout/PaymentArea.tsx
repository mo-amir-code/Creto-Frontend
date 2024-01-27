import { makePaymentRequestAsync } from "../../redux/app/appAsyncThunk"
import { selectSelectedAddress, setPaymentStatus } from "../../redux/app/appSlice"
import { OrderItemType, OrderType } from "../../redux/app/appTypes"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { selectCart } from "../../redux/product/productSlice"
import { CartDataType, CartItemObjectType } from "../../redux/product/productTypes"
import { selectUserInfo } from "../../redux/user/userSlice"
import CartBill from "../cart/CartBill"
import { OrderItem } from "../userProfile/UserOrders"


const PaymentArea = () => {
    const cart = useAppSelector(selectCart);
    const userInfo = useAppSelector(selectUserInfo);
    const selectedAddress = useAppSelector(selectSelectedAddress);
    const dispatch = useAppDispatch();
    const subTotal = cart?.data?.reduce((total: number, current: CartDataType) => {
        return total + current?.currentPrice * current.quantity;
    }, 0);

    const handleMakePayment = () => {
        if (userInfo.data && cart.data.length > 0) {
            const items = cart?.data?.map((item) => {
                return {
                    title: (item.productId as CartItemObjectType).title,
                    productId: (item.productId as CartItemObjectType)._id,
                    currentPrice: Math.ceil(item.currentPrice),
                    quantity: item.quantity,
                    color: item.color,
                    frameSize: item.frameSize,
                    wheelSize: item.wheelSize,
                }
            }) as [OrderItemType] | [];
            const data = {
                purchasedUserId: userInfo.data._id,
                orderItems: items,
                deliveryAddress: userInfo.data?.addresses[selectedAddress],
                paymentMode: "card",
                totalAmount: subTotal
            } as OrderType;
            dispatch(makePaymentRequestAsync({ data }));
            dispatch(setPaymentStatus("pending"));
        }
    }

    return (
        <div className="flex-[0.35] w-full max-md:mx-0 mx-2 rounded-lg text-secondary-color p-4" >
            <div className="p-4" >
                <h2 className="text-3xl font-[Teko] font-semibold" >Cart Items</h2>
                <div>
                    {
                        cart?.data?.map((cart, idx) => (
                            <OrderItem key={idx} _id={(cart.productId as CartItemObjectType)._id} title={(cart.productId as CartItemObjectType).title} thumbnail={(cart.productId as CartItemObjectType).thumbnail} price={cart.currentPrice} quantity={cart.quantity} color={cart.color} />
                        ))
                    }
                </div>
            </div>
            <div>
                <CartBill path="checkout/payment" subTotal={subTotal} handleMakePayment={handleMakePayment} />
            </div>
        </div>
    )
}

export default PaymentArea
