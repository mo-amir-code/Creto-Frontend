import advantage from "../../assets/advantages/advantages_bike.jpg"
import { advantages } from "../../data"

const Advantages = () => {
    return (
        <div className="w-full h-[600px] border-t border-secondary-color_3 relative font-[Teko] text-white overflow-hidden" >
            <img src={advantage} alt="advantages" className="object-cover object-center w-full h-full" />
            <div className="w-full h-full absolute top-0 left-0 bg-secondary-color/90" >
                <div className="mt-36 max-md:mt-16 max-w-6xl mx-auto" >
                    <h2 className="text-5xl font-bold w-full text-center max-[1200px]:text-4xl max-md:text-2xl" >OUR ADVANTAGES</h2>
                    <div className="flex items-center gap-6 justify-around flex-wrap mt-24 max-[960px]:mt-10 px-4" >
                        {
                            advantages.map((advantage) => (
                                <div key={advantage.name} className="flex-col flex items-center gap-4 justify-center max-sm:w-[150px] max-[1200px]:w-[200px] w-[250px]" >
                                    <img src={advantage.image} alt={advantage.name} className="max-[1200px]:w-[60px] max-sm:w-[50px]" />
                                    <h3 className="w-full text-center font-medium text-3xl leading-7 max-[1200px]:text-2xl max-[960px]:text-lg max-sm:text-sm" >{advantage.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="absolute -top-4 left-0 w-full h-8 bg-white -rotate-1" />
            <div className="absolute bottom-0 left-0 w-[200%] h-20 bg-white -rotate-3 translate-x-48 translate-y-12 max-[1200px]:translate-x-28 max-md:translate-x-0" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-white rotate-6 -translate-x-[40rem] translate-y-12" />
        </div>
    )
}

export default Advantages
