import { useEffect } from "react"
import FormArea from "../components/checkout/FormArea"
import PaymentArea from "../components/checkout/PaymentArea"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectCart } from "../redux/product/productSlice"
import { fetchCartDataAsync } from "../redux/product/productAsyncThunk"
import { selectLoggedInUser } from "../redux/auth/authSlice"


const CheckoutPage = () => {
    const cart = useAppSelector(selectCart);
    const loggedInUser = useAppSelector(selectLoggedInUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!(cart.data.length > 0) && loggedInUser) {
            dispatch(fetchCartDataAsync({ userId: loggedInUser?.userId }));
        }
    }, []);

    return (
        <div className="max-w-6xl mx-auto w-full" >
            <div className="w-full flex justify-center py-8 max-lg:flex-col max-lg:justify-start max-lg:gap-8" >
                <FormArea />
                <PaymentArea />
            </div>
        </div>
    )
}

export default CheckoutPage
