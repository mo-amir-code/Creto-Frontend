import Header from "../components/Header"
import Categories from "../components/categories"
import Hero from "../components/hero"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Advantages from "../components/advantages";

const HomeLayout = () => {
    return (
        <div className="w-full" >
            <div className="max-w-6xl mx-auto" >
                <Header />
                <Hero />
                <Categories />
            </div>
            <Advantages />
            <div className="h-screen" ></div>
        </div>
    )
}

export default HomeLayout
