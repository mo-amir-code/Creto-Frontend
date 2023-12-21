import Header from "../components/Header"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="w-full" >
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout
