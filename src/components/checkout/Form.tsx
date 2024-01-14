import { useForm } from "react-hook-form";
import { ContactInputField } from "../contact/ContactForm"

interface FormDataType {
    name: string,
    email: string,
    address: string,
    country: string,
    state: string,
    city: string,
    postalCode: number,
    mobile: number,
}

const Form = () => {

    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    const handleOnSubmit = (data: FormDataType) => {
        
    }


    return (
        <form onSubmit={(handleSubmit((data: any) => handleOnSubmit(data)))} className="space-y-4" >
            <ContactInputField placeHolder="Full name" icon="name" type="text" register={register} />
            <ContactInputField placeHolder="Email" icon="email" type="email" register={register} />
            <ContactInputField placeHolder="Address" icon="address" type="text" register={register} />
            <div className="flex items-center max-sm:flex-col justify-center gap-2" >
                <ContactInputField placeHolder="Country" icon="country" type="text" register={register} />
                <ContactInputField placeHolder="State" icon="state" type="text" register={register} />
            </div>
            <ContactInputField placeHolder="City" icon="city" type="text" register={register} />
            <div className="flex items-center max-sm:flex-col justify-center gap-2" >
                <ContactInputField placeHolder="Postal Code" icon="postalCode" type="number" register={register} />
                <ContactInputField placeHolder="Mobile Number" icon="mobile" type="number" register={register} />
            </div>
            <button className="px-4 py-2 rounded-lg bg-primary-color font-[Teko] text-lg max-sm:text-base font-semibold shadow-lg hover:-translate-y-1 smooth_transition" >Submit</button>
        </form>
    )
}

export default Form
