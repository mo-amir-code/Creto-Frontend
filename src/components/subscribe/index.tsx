import advantage from "../../assets/advantages/advantages_bike.jpg"

const Subscribe = () => {
    return (
        <div className="w-full h-[600px] border-t border-secondary-color_3 relative font-[Teko] text-white overflow-hidden" >
            <img src={advantage} alt="advantages" className="object-cover object-center w-full h-full" />
            <div className="w-full h-full absolute top-0 left-0 bg-secondary-color/90" >
                <div className="mt-48 max-w-6xl mx-auto space-y-2" >
                    <h2 className="text-5xl font-bold w-full text-center max-[1200px]:text-4xl max-sm:text-2xl" >SUBSCRIBE</h2>
                    <p className="max-w-sm w-full mx-auto text-2xl max-sm:text-lg max-sm:leading-5 px-4 text-center leading-6" >Subscribe us and you won't miss the new arrivals, as well as discounts and sales.</p>
                    <Form />
                </div>
            </div>
            <div className="absolute -top-4 left-0 w-full h-8 bg-white rotate-1" />
            <div className="absolute bottom-0 left-0 w-[200%] h-20 bg-white -rotate-3 translate-x-48 translate-y-12 max-[1200px]:translate-x-28 max-md:translate-x-0" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-white rotate-6 -translate-x-[40rem] translate-y-12" />
        </div>
    )
}

export default Subscribe

export function Form() {
    return (
        <form className="max-w-lg w-full mx-auto flex items-center max-sm:flex-col px-4 gap-4 justify-center font-[Teko]" >
            <input type="text" placeholder="@ E-mail" className="py-3 px-4 outline-none flex-grow font-bold w-full bg-secondary-color/10 border-2 border-secondary-color_3" />
            <button className="px-8 py-3 text-lg font-semibold bg-primary-color text-secondary-color" >SEND</button>
        </form>
    )
}
