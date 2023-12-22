import Header from "../components/Header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { navbarData } from "../data";

const HomeLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full relative" >
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Outlet />
            <Footer />
        </div>
    )
}

export const OpenMenu = ({open, setMenuOpen}:{open:boolean, setMenuOpen:Function}) => {
    const navigate = useNavigate();

    const handleRoute = (path:string):void => {
        setMenuOpen(false);
        navigate(path);
    }

    return (
        <div className={`w-full h-screen absolute top-[100%] left-0 ${open? "enter_from_left" : "out_from_left"} bg-white z-40`} >
            <div className="px-4" >
                <ul className="flex flex-col items-start justify-start gap-4 font-[Teko] text-lg" >
                    {navbarData.map((nav, idx) => (
                        <li onClick={()=>handleRoute(nav.path)} style={{animationDuration: `${(idx + 1) / 4}s` }} key={nav.path} className="hover:text-primary-color duration-200 transition-all enter_from_left cursor-pointer" >{nav.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeLayout
