import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import img from "../../assets/images/productDetails.jpg"
import { ProductType } from "../componentsTypes";

const Description = ({product}:{product:ProductType | null}) => {
    const [isConf, setIsConf] = useState<boolean>(false);
    const [isDrive, setIsDrive] = useState<boolean>(false);
    const [isNOS, setIsNOS] = useState<boolean>(false);
    const [isCR, setIsCR] = useState<boolean>(false);


    return (
        <div className="w-full" >
            <div className="w-full flex max-lg:flex-col max-lg:gap-10 gap-2 items-center justify-center" >
                <div className="flex-grow w-full space-y-3 font-medium text-gray-500" >
                    <p className="text-base" >{product?.description}</p>
                    <div className={`space-y-2 overflow-hidden h-6 ${isConf && "h-full"} transition-all duration-200`} >
                        <h3 onClick={() => setIsConf(!isConf)} className="flex items-center gap-1 cursor-pointer" >Main Configuration <ChevronDownIcon className={`w-3 pt-1 ${isConf && "rotate-180"} duration-200 transition-all`} /></h3>
                        <ul className="pl-10" >
                            <li>Frame Size: {product?.specs.frameSize}</li>
                            <li>Class: {product?.specs?.class}</li>
                            <li>Number of speeds: {product?.specs?.nos}</li>
                            <li>Type: {product?.type}</li>
                            <li>Country registration: {product?.specs?.cr}</li>
                        </ul>
                    </div>
                    <div className={`space-y-2 overflow-hidden h-6 ${isDrive && "h-full"} transition-all duration-200`} >
                        <h3 onClick={() => setIsDrive(!isDrive)} className="flex items-center gap-1 cursor-pointer" >Drive <ChevronDownIcon className={`w-3 pt-1 ${isDrive && "rotate-180"} duration-200 transition-all`} /></h3>
                        <ul className="pl-10" >
                            <li>Frame Size: 26</li>
                            <li>Class: City</li>
                            <li>Number of speeds: 20</li>
                            <li>Type: Rigid</li>
                            <li>Country registration: INDIA</li>
                        </ul>
                    </div>
                    <div className={`space-y-2 overflow-hidden h-6 ${isNOS && "h-full"} transition-all duration-200`} >
                        <h3 onClick={() => setIsNOS(!isNOS)} className="flex items-center gap-1 cursor-pointer" >Wheelset <ChevronDownIcon className={`w-3 pt-1 ${isNOS && "rotate-180"} duration-200 transition-all`} /></h3>
                        <ul className="pl-10" >
                            <li>Frame Size: 26</li>
                            <li>Class: City</li>
                            <li>Number of speeds: 20</li>
                            <li>Type: Rigid</li>
                            <li>Country registration: INDIA</li>
                        </ul>
                    </div>
                    <div className={`space-y-2 overflow-hidden h-6 ${isCR && "h-full"} transition-all duration-200`} >
                        <h3 onClick={() => setIsCR(!isCR)} className="flex items-center gap-1 cursor-pointer" >Special <ChevronDownIcon className={`w-3 pt-1 ${isCR && "rotate-180"} duration-200 transition-all`} /></h3>
                        <ul className="pl-10" >
                            <li>Frame Size: 26</li>
                            <li>Class: City</li>
                            <li>Number of speeds: 20</li>
                            <li>Type: Rigid</li>
                            <li>Country registration: INDIA</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[850px] max-lg:w-full space-y-1 h-full overflow-hidden" >
                    <div className="w-full overflow-hidden" >
                        <img src={product?.images? product?.images[0] : img} alt="" className="object-cover object-center w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description
