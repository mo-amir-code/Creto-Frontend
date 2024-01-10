import { Outlet, useNavigate } from "react-router-dom"
import bike from "../assets/advantages/advantages_bike.jpg"
import { selectIsLoggedIn } from "../redux/auth/authSlice"
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

const AuthLayout = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(selectIsLoggedIn)

    useEffect(()=>{
        if(isLoggedIn) {
            return navigate("/");
        }
    }, [isLoggedIn])

    return (
        <div className="max-w-5xl w-full mx-auto py-12 px-4" >
            <div className="w-full flex bg-white rounded-lg shadow-lg" >
                <div className="flex-grow max-md:hidden overflow-hidden rounded-l-lg" >
                    <img src={bike} alt="sigin" className="object-cover h-full" />
                </div>
                <div className="w-[2200px] px-8 py-16 flex items-center justify-center" >
                    <div className="flex flex-col justify-center w-full gap-12" >
                        <div className="" >
                            <h1 className="font-[Teko] font-bold text-4xl text-secondary-color max-md:text-3xl" >Welcome to <span className="text-primary-color" >Creto</span></h1>
                            <h2 className="font-medium text-xl italic text-secondary-color -mt-3 max-md:text-lg" >Buy Smarter Today</h2>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
