import { calculateGST, calculateTotal } from "../../services"


const CartBill = ({ subTotal, isCart }: { subTotal: number | undefined, isCart: boolean }) => {
  return (
    <div className="flex-[0.35] w-full max-md:mx-0 mx-2 rounded-lg text-secondary-color p-4" >
      <div className="space-y-3" >
        <h2 className="text-3xl font-[Teko] font-bold" >Summary</h2>
        <div className="space-y-1" >
          <h3 className="flex items-center justify-between font-semibold" ><span>Subtotal</span><span>${subTotal?.toFixed(2)}</span></h3>
          <h3 className="flex items-center justify-between font-semibold" ><span>Estimated Shipping & Handling</span><span>-</span></h3>
          <h3 className="flex items-center justify-between font-semibold" ><span>Estimated Tax</span><span>${calculateGST(subTotal)}</span></h3>
        </div>
        <div className="py-2" >
          <h3 className="flex items-center py-3 border-t border-b border-secondary-color justify-between font-semibold" ><span>Total</span><span>${calculateTotal(subTotal)?.toFixed(2)}</span></h3>
        </div>
        {isCart && <button className="w-full py-3 font-bold shadow-lg smooth_transition hover:-translate-y-1 flex items-center justify-center bg-primary-color rounded-full" >Checkout</button>}      </div>
    </div>
  )
}

export default CartBill
