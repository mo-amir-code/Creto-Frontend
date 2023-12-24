

const CartBill = () => {
  return (
    <div className="flex-[0.35] w-full mx-2 rounded-lg text-secondary-color p-4" >
        <div className="space-y-3" >
            <h2 className="text-3xl font-[Teko] font-bold" >Summary</h2>
            <div className="space-y-1" >
                <h3 className="flex items-center justify-between font-semibold" ><span>Subtotal</span><span>$788</span></h3>
                <h3 className="flex items-center justify-between font-semibold" ><span>Estimated Shipping & Handling</span><span>$8</span></h3>
                <h3 className="flex items-center justify-between font-semibold" ><span>Estimated Tax</span><span>-</span></h3>
            </div>
            <div className="py-2" >
                <h3 className="flex items-center py-3 border-t border-b border-secondary-color justify-between font-semibold" ><span>Total</span><span>$796</span></h3>
            </div>
            <button className="w-full py-3 font-bold shadow-lg smooth_transition hover:-translate-y-1 flex items-center justify-center bg-primary-color rounded-full" >Checkout</button>
        </div>
    </div>
  )
}

export default CartBill
