import Header from "../components/Header"
import Hero from "../components/hero"

const HomeLayout = () => {
    return (
        <div className="max-w-6xl w-full mx-auto" >
            <div className="w-full" >
                <Header />
                <Hero/>
                <div className="h-screen" ></div>
            </div>
        </div>
    )
}

export default HomeLayout
