import Header from "../components/Header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { Link, Outlet } from "react-router-dom";
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

export const OpenMenu = ({open}:{open:boolean}) => {
    return (
        <div className={`w-full h-screen absolute top-[100%] left-0 ${open? "enter_from_left" : "out_from_left"} bg-white z-40`} >
            <div className="px-4" >
                <ul className="flex flex-col items-start justify-start gap-4 font-[Teko] text-lg" >
                    {navbarData.map((nav, idx) => (
                        <Link style={{animationDuration: `${(idx + 1) / 4}s` }} to={nav.path} key={nav.path} className="hover:text-primary-color duration-200 transition-all enter_from_left" >{nav.name}</Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeLayout
