import CartBill from "../cart/CartBill"
import { OrderItem } from "../userProfile/UserOrders"


const PaymentArea = () => {
    return (
        <div className="flex-[0.35] w-full max-md:mx-0 mx-2 rounded-lg text-secondary-color p-4" >
            <div className="p-4" >
                <h2 className="text-3xl font-[Teko] font-semibold" >Cart Items</h2>
                <div>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
            <div>
                <CartBill isCart={false} subTotal={2345} />
            </div>
        </div>
    )
}

export default PaymentArea
