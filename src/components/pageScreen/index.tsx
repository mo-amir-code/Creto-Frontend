import { Link } from "react-router-dom"
import { firstLetterCap, replaceString } from "../../services";

const PageScreen = () => {
    const path = replaceString(window.location.pathname, "/", "");
    return (
        <div className="w-full font-[Teko] h-48 bg-secondary-color relative overflow-hidden flex items-center justify-center" >
            <div className="mb-4" >
                <h1 className="text-7xl font-bold text-primary-color" >{firstLetterCap(path)}</h1>
                <p className="text-center text-lg text-white space-x-2" ><Link to={"/"} className="hover:text-primary-color transition-all duration-200" >Home</Link><span>/</span><span>{firstLetterCap(path)}</span></p>
            </div>
            <div className="absolute top-[80%] h-24 w-[110%] bg-white -rotate-2" />
        </div>
    )
}

export default PageScreen
