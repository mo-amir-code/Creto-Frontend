import { ArrowRightOnRectangleIcon, ShieldCheckIcon, UserPlusIcon } from "@heroicons/react/24/solid"
import { ContactInputField } from "../components/contact/ContactForm"
import { CheckBox } from "../components/filterProducts/Bike"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { loginUserAsync, signinWithGoogleAsync } from "../redux/auth/authAsyncThunk"
import { loginType } from "../redux/auth/authTypes"
import { selectAuthStatus } from "../redux/auth/authSlice"
import Loader from "../components/Loader"
import googleIcon from "../assets/auth/google.svg"
import { toast } from "react-toastify"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"

const SigninPage = () => {
    const dispatch = useAppDispatch();
    const authStatus = useAppSelector(selectAuthStatus)

    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    const handleGoogleAuth = async () => {
        try {
            const credentials = await signInWithPopup(auth, googleProvider);
            const authData = {
                name: credentials.user.displayName,
                email: credentials.user.email,
                photoURL: credentials.user.photoURL,
                uid: credentials.user.uid,
            }
            if (authData.name && authData.email && authData.uid) {
                dispatch(signinWithGoogleAsync(authData))
            }else{
                toast.error("Something went wrong");
            }
        } catch (err: any) {
            console.log(err);
            toast.error(err.message);
            localStorage.removeItem("user")
        }
    }

    const handleOnSubmit = async (data: loginType) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            dispatch(loginUserAsync({ email: data.email, password: data.password }));
        } catch (error:any) {
            console.log(error);   
            toast.error("Something went wrong");
        }
    }

    if (authStatus === "pending") {
        return <Loader />
    }


    return (
        <form onSubmit={handleSubmit((data: any) => { handleOnSubmit(data) })} className="flex flex-col gap-4 w-full" >
            <ContactInputField register={register} placeHolder="Email" type="email" icon="email" />
            <ContactInputField register={register} placeHolder="Password" type="password" icon="password" />
            <div className="flex items-center justify-between font-[Teko]" >
                <CheckBox id="remember" name="Remember" />
                <span className="hover:text-primary-color smooth_transition" >Forgot Password? <Link to={'/auth/signup'} className="text-primary-color hover:text-secondary-color" >Create an account?</Link></span>
            </div>
            <SubmitButton name="Sign in" icon="signin" />
            <GoogleSigninButton name="Sign in" handleGoogleAuth={handleGoogleAuth} />
        </form>
    )
}

export const SubmitButton = ({ name, icon }: { name: string, icon: string }) => {
    return (
        <div className="flex items-center justify-center" >
            <button type="submit" className="px-8 w-full gap-1 border-2 border-primary-color smooth_transition hover:shadow-lg py-2 flex items-center justify-center font-[Teko]" >
                <span className="text-xl" >{name}</span>
                {
                    ((): any => {
                        switch (icon) {
                            case "signin":
                                return <ArrowRightOnRectangleIcon className="w-5 h-5" />;
                            case "signup":
                                return <UserPlusIcon className="w-5 h-5" />;
                            case "verify":
                                return <ShieldCheckIcon className="w-5 h-5" />
                        }
                    })()
                }
            </button>
        </div>
    )
}


export const GoogleSigninButton = ({ name, handleGoogleAuth }: { name: string, handleGoogleAuth: Function }) => {
    return (
        <button onClick={() => handleGoogleAuth()} className="px-8 w-full gap-1 border-2 border-primary-color smooth_transition hover:shadow-lg py-2 flex items-center justify-center font-[Teko]" >
            <span className="text-xl" >{name} with Google</span><div className="w-4 h-4" >
                <img src={googleIcon} alt="signin with google" />
            </div>
        </button>
    )
}

export default SigninPage
