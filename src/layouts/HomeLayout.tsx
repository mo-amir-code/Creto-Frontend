import Header from "../components/Header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const HomeLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full relative" >
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Outlet />
            <Footer />
            <OpenMenu open={menuOpen} />
        </div>
    )
}

export const OpenMenu = ({open}:{open:boolean}) => {
    return (
        <div className={`w-full h-screen absolute top-10 left-0 ${open? "block" : "hidden"} bg-white`} >
            <div className="px-4" >
                <Link to={'/shop'} >Shop</Link>
            </div>
        </div>
    )
}

export default HomeLayout
