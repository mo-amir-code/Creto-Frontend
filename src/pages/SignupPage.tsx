import { ContactInputField } from "../components/contact/ContactForm"
import { CheckBox } from "../components/filterProducts/Bike"
import { SubmitButton } from "./SigninPage"
import bike from "../assets/advantages/advantages_bike.jpg"
import { Link } from "react-router-dom"


const SignupPage = () => {
    return (
        <div className="max-w-5xl w-full mx-auto py-12 px-4" >
            <div className="w-full flex bg-white rounded-lg shadow-lg" >
                <div className="flex-grow max-md:hidden" >
                    <img src={bike} alt="sigin" className="object-cover h-full" />
                </div>
                <div className="w-[2200px] px-8 py-16 flex items-center justify-center" >
                    <div className="flex flex-col justify-center w-full gap-12" >
                        <div className="" >
                            <h1 className="font-[Teko] font-bold text-4xl text-secondary-color max-md:text-3xl" >Welcome to <span className="text-primary-color" >Creto</span></h1>
                            <h2 className="font-medium text-xl italic text-secondary-color -mt-3 max-md:text-lg" >Buy Smarter Today</h2>
                        </div>
                        <form className="flex flex-col gap-4 w-full" >
                            <ContactInputField placeHolder="Full Name" type="text" icon="name" />
                            <ContactInputField placeHolder="Email" type="email" icon="email" />
                            <ContactInputField placeHolder="Password" type="password" icon="password" />
                            <ContactInputField placeHolder="Confirm Password" type="password" icon="password" />
                            <div className="flex items-center justify-between font-[Teko]" >
                                <CheckBox id="remember" name="Remember" />
                                <Link to={'/auth/signin'} className="hover:text-secondary-color smooth_transition text-primary-color" >Have an account?</Link>
                            </div>
                            <SubmitButton name="Sign up" icon="signup" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
