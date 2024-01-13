import emptyCart from "../../assets/cart/emptyCart.jpg"

const EmptyCart = ({message}:{message:string}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center" >
        <div className="w-[30%]" >
            <img src={emptyCart} alt="Your cart is empty" />
        </div>
        <h2 className="text-3xl max-sm:text-lg max-sm:font-medium font-[Teko] tracking-wider font-semibold text-secondary-color" >{message}</h2>
    </div>
  )
}

export default EmptyCart
