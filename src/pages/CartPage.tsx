import CartBill from "../components/cart/CartBill"
import CartItems from "../components/cart/CartItems"

const CartPage = () => {
  return (
    <div className="max-w-6xl mx-auto w-full" >
        <div className="w-full flex justify-center py-12 max-lg:flex-col max-lg:justify-start max-lg:gap-8" >
            <CartItems />
            <CartBill />
        </div>
    </div>
  )
}

export default CartPage
