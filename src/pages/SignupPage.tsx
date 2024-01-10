import { ContactInputField } from "../components/contact/ContactForm"
import { CheckBox } from "../components/filterProducts/Bike"
import { GoogleSigninButton, SubmitButton } from "./SigninPage"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { signinWithGoogleAsync, signupUserAsync } from "../redux/auth/authAsyncThunk"
import { signupType } from "../redux/auth/authTypes"
import { selectAuthStatus } from "../redux/auth/authSlice"
import Loader from "../components/Loader"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { toast } from "react-toastify"
import { auth, googleProvider } from "../firebase"


const SignupPage = () => {
    const dispatch = useAppDispatch();
    const authStatus = useAppSelector(selectAuthStatus)


    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    const handleGoogleAuth = async () => {
        try{
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
        }catch(err:any){
            console.log(err);
            toast.error(err.message);
        }
    }

    const handleOnSubmit = async (data: signupType) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            dispatch(signupUserAsync({ name: data.name, email: data.email, password: data.password }))
        } catch (error:any) {
            console.log(error)
            toast.error(error.message);
            localStorage.removeItem("user");
        }
    }


    if (authStatus === "pending") {
        return <Loader />
    }


    return (
        <form onSubmit={handleSubmit((data: any) => { handleOnSubmit(data) })} className="flex flex-col gap-4 w-full" >
            <ContactInputField register={register} placeHolder="Full Name" type="text" icon="name" />
            <ContactInputField register={register} placeHolder="Email" type="email" icon="email" />
            <ContactInputField register={register} placeHolder="Password" type="password" icon="password" />
            <ContactInputField register={register} placeHolder="Confirm Password" type="password" icon="confirmPassword" />
            <div className="flex items-center justify-between font-[Teko]" >
                <CheckBox id="remember" name="Remember" />
                <Link to={'/auth/signin'} className="hover:text-secondary-color smooth_transition text-primary-color" >Have an account?</Link>
            </div>
            <SubmitButton name="Sign up" icon="signup" />
            <GoogleSigninButton name="Sign up" handleGoogleAuth={handleGoogleAuth} />
        </form>
    )
}

export default SignupPage
