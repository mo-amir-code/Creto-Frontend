import { useEffect, useState } from "react";
import CartBill from "../components/cart/CartBill"
import CartItems from "../components/cart/CartItems"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectIsLoggedIn, selectLoggedInUser } from "../redux/auth/authSlice";
import { fetchCartDataAsync } from "../redux/product/productAsyncThunk";
import { selectCart } from "../redux/product/productSlice";
import Loader from "../components/Loader";
import { CartDataType } from "../redux/product/productTypes";
import EmptyCart from "../components/cart/EmptyCart";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const loggedInUser = useAppSelector(selectLoggedInUser);
  const cart = useAppSelector(selectCart);


  useEffect(() => {
    const total = cart?.data?.reduce((total: number, current: CartDataType) => {
      return total + current?.currentPrice * current.quantity;
    }, 0);
    setSubTotal(total)
  }, [cart?.data])


  useEffect(() => {
    if (loggedInUser && isLoggedIn) {
      dispatch(fetchCartDataAsync({ userId: loggedInUser?.userId }))
    }
  }, [])

  if (cart.status === "pending") {
    return (
      <div className="w-full h-[80vh]" >
        <Loader />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto w-full" >
      <div className="w-full flex justify-center py-12 max-lg:flex-col max-lg:justify-start max-lg:gap-8" >
        {cart.data?.length > 0 ? <>
          <CartItems cart={cart?.data} />
          <CartBill isCart={true} subTotal={subTotal} />
        </> : <EmptyCart message="Cart is empty." />}
      </div>
    </div>
  )
}

export default CartPage
