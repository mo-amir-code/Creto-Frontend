import Header from "../components/Header"
import Categories from "../components/categories"
import Hero from "../components/hero"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Advantages from "../components/advantages";
import OurProducts from "../components/ourProducts";
import Subscribe from "../components/subscribe";
import TopSale from "../components/topProducts";
import Labels from "../components/labels";
import Footer from "../components/footer";

const HomeLayout = () => {
    return (
        <div className="w-full" >
            <div className="max-w-6xl mx-auto" >
                <Header />
                <Hero />
                <Categories />
            </div>
            <Advantages />
            <OurProducts />
            <Subscribe />
            <TopSale />
            <Labels />
            <Footer />
        </div>
    )
}

export default HomeLayout
