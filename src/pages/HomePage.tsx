import Advantages from "../components/advantages"
import Categories from "../components/categories"
import Hero from "../components/hero"
import Labels from "../components/labels"
import OurProducts from "../components/ourProducts"
import Subscribe from "../components/subscribe"
import TopSale from "../components/topProducts"


const HomePage = () => {
    return (
        <div className="w-full" >
            <Hero />
            <Categories />
            <Advantages />
            <OurProducts />
            <Subscribe />
            <TopSale />
            <Labels />
        </div>
    )
}

export default HomePage
