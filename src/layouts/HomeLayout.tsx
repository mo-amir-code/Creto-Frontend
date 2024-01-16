import Header from "../components/Header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { navbarData } from "../data";
import { resetAuthState, selectIsLoggedIn, selectLoggedInUser } from "../redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { persist } from "../redux/store";
import { toast } from "react-toastify";
import { fetchCartCountAsync } from "../redux/product/productAsyncThunk";
import { resetUserState, selectUserInfo } from "../redux/user/userSlice";
import { fetchUserAsync } from "../redux/user/userAsyncThunk";

const HomeLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const path = useLocation().pathname;
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const loggedInUser = useAppSelector(selectLoggedInUser);
    const userInfo = useAppSelector(selectUserInfo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if ((path === "/user/cart" || path === "/user/profile" || path.startsWith("/admin")) && !isLoggedIn) {
            navigate("/auth/signin");
        }

        if (isLoggedIn && loggedInUser) {
            dispatch(fetchCartCountAsync({ userId: loggedInUser?.userId }));
        }

    }, [path, isLoggedIn])

    useEffect(() => {
        if (isLoggedIn && loggedInUser && !userInfo.data) {
            dispatch(fetchUserAsync({ userId: loggedInUser.userId }))
        }

    }, [])

    return (
        <div className="w-full relative" >
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Outlet />
            <Footer />
        </div>
    )
}

export const OpenMenu = ({ open, setMenuOpen }: { open: boolean, setMenuOpen: Function }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleRoute = (path: string): void => {
        if (path !== "logout") {
            setMenuOpen(false);
            navigate(path);
        } else {
            setMenuOpen(false)
            handleLogOut()
            dispatch(resetAuthState());
            dispatch(resetUserState());
        }
    }

    return (
        <div className={`w-full h-screen absolute top-[100%] left-0 ${open ? "enter_from_left" : "out_from_left"} bg-white z-40`} >
            <div className="px-4" >
                <ul className="flex flex-col items-start justify-start gap-4 font-[Teko] text-lg" >
                    {navbarData.map((nav, idx) => (
                        <li onClick={() => handleRoute(nav.path)} style={{ animationDuration: `${(idx + 1) / 4}s` }} key={nav.path} className="hover:text-primary-color duration-200 transition-all enter_from_left cursor-pointer" >{nav.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export const handleLogOut = () => {
    signOut(auth);
    persist.purge().then(() => {
        toast.success("You are logged out");
    })
}

export default HomeLayout
