import { ChangeEvent, useState } from "react"
import { SubmitButton } from "./SigninPage"
import { useAppDispatch } from "../redux/hooks";
import { verifyUserAsync } from "../redux/auth/authAsyncThunk";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";


const VerifyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [otp, setOtp] = useState<string>('');
  const dispatch = useAppDispatch();
  const token = searchParams.get('token');

  const handleOnChnage = (e:any) => {
    setOtp(e.target.value);
    
  }

  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    if(otp?.length < 6){
      toast.error("Enter 6 digits OTP code.")
    }else{
      dispatch(verifyUserAsync({otp:otp, token:token}))
    }
    
  }

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 w-full" >
      <div className="font-[Teko] w-full cursor-pointer flex-1 text-xl py-3 gap-2 border-2 border-secondary-color_3 px-2 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-center" >
        <input type="number" onChange={handleOnChnage} className="text-base font-normal outline-none group text-center w-full" placeholder={"Enter your OTP here"} />
      </div>
      <SubmitButton name="Verify" icon="verify" />
    </form>
  )
}

export default VerifyPage
