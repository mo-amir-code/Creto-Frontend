import { ArrowRightOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid"
import bike from "../assets/advantages/advantages_bike.jpg"
import { ContactInputField } from "../components/contact/ContactForm"
import { CheckBox } from "../components/filterProducts/Bike"
import { Link } from "react-router-dom"

const SigninPage = () => {
    return (
        <div className="max-w-5xl w-full mx-auto py-12 px-4" >
            <div className="w-full flex bg-white rounded-lg overflow-hidden shadow-lg" >
                <div className="flex-grow max-md:hidden overflow-hidden" >
                    <img src={bike} alt="sigin" className="object-cover h-full" />
                </div>
                <div className="w-[2200px] px-8 py-16 flex items-center justify-center" >
                    <div className="flex flex-col justify-center w-full gap-12" >
                        <div className="" >
                            <h1 className="font-[Teko] font-bold text-4xl text-secondary-color max-md:text-3xl" >Welcome to <span className="text-primary-color" >Creto</span></h1>
                            <h2 className="font-medium text-xl italic text-secondary-color -mt-3 max-md:text-lg" >Buy Smarter Today</h2>
                        </div>
                        <form className="flex flex-col gap-4 w-full" >
                            <ContactInputField placeHolder="Email" type="email" icon="email" />
                            <ContactInputField placeHolder="Password" type="password" icon="password" />
                            <div className="flex items-center justify-between font-[Teko]" >
                                <CheckBox id="remember" name="Remember" />
                                <span className="hover:text-primary-color smooth_transition" >Forgot Password? <Link to={'/auth/signup'} className="text-primary-color hover:text-secondary-color" >Create an account?</Link></span>
                            </div>
                            <SubmitButton name="Sign in" icon="signin" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SubmitButton = ({ name, icon }: { name: string, icon: string }) => {
    return (
        <div className="flex items-center justify-center" >
            <button className="px-8 gap-1 border-2 border-primary-color smooth_transition hover:shadow-lg py-2 flex items-center justify-center font-[Teko]" >
                <span className="text-xl" >{name}</span>
                {
                    ((): any => {
                        switch (icon) {
                            case "signin":
                                return <ArrowRightOnRectangleIcon className="w-5 h-5" />;
                            case "signup":
                                return <UserPlusIcon className="w-5 h-5" />;
                        }
                    })()
                }
            </button>
        </div>
    )
}

export default SigninPage
