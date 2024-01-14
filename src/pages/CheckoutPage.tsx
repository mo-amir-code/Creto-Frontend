import FormArea from "../components/checkout/FormArea"
import PaymentArea from "../components/checkout/PaymentArea"


const CheckoutPage = () => {
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
