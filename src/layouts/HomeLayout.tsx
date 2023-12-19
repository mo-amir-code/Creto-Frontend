import Header from "../components/Header"
import Categories from "../components/categories"
import Hero from "../components/hero"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeLayout = () => {
    return (
        <div className="max-w-6xl w-full mx-auto" >
            <div className="w-full" >
                <Header />
                <Hero/>
                <div className="" >
                    <Categories />
                </div>
            </div>
        </div>
    )
}

export default HomeLayout
