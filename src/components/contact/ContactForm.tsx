import { ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon, LockClosedIcon, PhoneIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/solid"


const ContactForm = () => {
    return (
        <div className="max-w-6xl w-full mx-auto px-4 space-y-8 flex flex-col items-center justify-center" >
            <h2 className="font-[Teko] text-4xl font-bold text-secondary-color" >CONTACT US</h2>
            <form className="w-full space-y-8 pb-12" >
                <div className="flex items-center justify-center w-full gap-6 max-md:flex-col" >
                    <ContactInputField placeHolder={"Name"} type={"text"} icon={"user"} />
                    <ContactInputField placeHolder={"Phone"} type={"text"} icon={"phone"} />
                    <ContactInputField placeHolder={"E-Mail"} type={"email"} icon={"email"} />
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

export const ContactInputField = ({placeHolder, icon, type}:{placeHolder:string, icon:string, type:string}) => {
    return (
        <div className="font-[Teko] w-full cursor-pointer flex-1 text-xl py-3 gap-2 border-2 border-secondary-color_3 px-2 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start" >
            {(():any=>{
                switch(icon){
                    case "user":
                        return <UserIcon className="w-5 h-5" />;
                    case "phone":
                        return <PhoneIcon className="w-5 h-5" />
                    case "email":
                        return <EnvelopeIcon className="w-5 h-5" />
                    case "password":
                        return <LockClosedIcon className="w-5 h-5" />
                    case "name":
                        return <UserCircleIcon className="w-5 h-5" />
                    default:
                        console.log("something went wrong")
                }
            })()}
            <input type={type} className="text-base font-normal outline-none group" placeholder={placeHolder} />
        </div>
    )
}

export default ContactForm
