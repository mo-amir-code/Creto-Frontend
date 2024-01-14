import { ChatBubbleOvalLeftEllipsisIcon, DevicePhoneMobileIcon, EnvelopeIcon, GlobeAmericasIcon, HomeModernIcon, LockClosedIcon, MapPinIcon, PhoneIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/solid"
import { useForm } from "react-hook-form";

export interface ContactFormType{
    user:string,
    phone:string,
    email:string,
}

const ContactForm = () => {

    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    const handleOnSubmit = (data: ContactFormType) => {
        console.log(data)
    }


    return (
        <div className="max-w-6xl w-full mx-auto px-4 space-y-8 flex flex-col items-center justify-center" >
            <h2 className="font-[Teko] text-4xl font-bold text-secondary-color" >CONTACT US</h2>
            <form onSubmit={handleSubmit((data: any) => { handleOnSubmit(data) })} className="w-full space-y-8 pb-12" >
                <div className="flex items-center justify-center w-full gap-6 max-md:flex-col" >
                    <ContactInputField register={register} placeHolder={"Name"} type={"text"} icon={"user"} />
                    <ContactInputField register={register} placeHolder={"Phone"} type={"text"} icon={"phone"} />
                    <ContactInputField register={register} placeHolder={"E-Mail"} type={"email"} icon={"email"} />
                </div>
                <div className="flex items-start justify-center gap-2 p-3 text-secondary-color_3 border-2 border-secondary-color_3 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200" >
                        <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                    <textarea cols={30} rows={10} placeholder="Message" className="font-[Teko] outline-none w-full cursor-pointer flex-1 text-xl hover" ></textarea>
                </div>
                <div className="w-full flex items-center justify-center" >
                    <button className="w-60 font-[Teko] hover:shadow-lg shadow-primary-color duration-200 transition-all text-xl font-medium py-3 border-2 border-primary-color" >SUBMIT COMMENT</button>
                </div>
            </form>
        </div>
    )
}

export const ContactInputField = ({placeHolder, icon, type, register}:{placeHolder:string, icon:string, type:string, register?:any}) => {
    return (
        <div className="font-[Teko] w-full cursor-pointer flex-1 text-xl py-3 gap-2 border-2 border-secondary-color_3 px-2 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start" >
            {(():any=>{
                switch(icon){
                    case "user":
                        return <UserIcon className="w-5 h-5" />;
                    case "name":
                        return <UserIcon className="w-5 h-5" />;
                    case "phone":
                        return <PhoneIcon className="w-5 h-5" />
                    case "email":
                        return <EnvelopeIcon className="w-5 h-5" />
                    case "password":
                        return <LockClosedIcon className="w-5 h-5" />
                    case "confirmPassword":
                        return <LockClosedIcon className="w-5 h-5" />
                    case "name":
                        return <UserCircleIcon className="w-5 h-5" />
                    case "address":
                        return <MapPinIcon className="w-5 h-5" />
                    case "country":
                        return <GlobeAmericasIcon className="w-5 h-5" />
                    case "state":
                        return <GlobeAmericasIcon className="w-5 h-5" />
                    case "postalCode":
                        return <MapPinIcon className="w-5 h-5" />
                    case "city":
                        return <HomeModernIcon className="w-5 h-5" />
                    case "mobile":
                        return <DevicePhoneMobileIcon className="w-5 h-5" />
                    default:
                        console.log("something went wrong")
                }
            })()}
            <input type={type} {...register? {...register(icon, {required:true})} : null} className="text-base font-normal outline-none group w-full" placeholder={placeHolder} />
        </div>
    )
}

export default ContactForm
