

const Footer = () => {
    return (
        <div className="max-w-6xl w-full mx-auto border-t border-secondary-color" >
            <div className="flex items-center gap-5 justify-center flex-wrap py-10 font-[Teko]" >
                <div className="flex-1 text-secondary-color space-y-3 px-4" >
                    <h2 className="text-xl font-bold w-full max-sm:text-lg " >SUBSCRIBE</h2>
                    <p className="w-full text-xl max-sm:text-lg max-sm:leading-5 leading-6" >Subscribe us and you won't miss the new arrivals, as well as discounts and sales.</p>
                    <form className="w-full flex max-w-xl items-center max-sm:flex-col gap-4 justify-center" >
                        <input type="text" placeholder="@ E-mail" className="py-3 px-4 outline-none hover:shadow-lg duration-200 transition-all focus:shadow-lg flex-grow font-bold w-full bg-white border-2 border-secondary-color_3" />
                        <button className="px-8 py-2 text-lg font-semibold border-2 hover:shadow-lg duration-200 transition-all border-primary-color text-secondary-color" >SEND</button>
                    </form>
                    <div className="py-6" >
                        <h4 className=" text-xl font-medium tracking-widest" >STAY IN TOUCH</h4>
                        <div>
                            Links soon...
                        </div>
                    </div>
                </div>
                {/* <div className="flex-1 h-full" >
                    <h2 className="text-xl font-semibold tracking-widest w-full max-sm:text-lg " >INFO</h2>
                </div> */}
            </div>
        </div>
    )
}

export default Footer
