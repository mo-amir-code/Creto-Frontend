import { PhoneIcon, EnvelopeIcon, HeartIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import logo from "../../assets/brand/creto_logo.svg"
import { navbarData } from "../../data"
import { Link } from "react-router-dom"
import { OpenMenu } from "../../layouts/HomeLayout"
import { useAppSelector } from "../../redux/hooks"
import { selectCart } from "../../redux/product/productSlice"
import { selectIsLoggedIn } from "../../redux/auth/authSlice"


const Header = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: Function }) => {
    const cart = useAppSelector(selectCart);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        <header className="max-w-6xl mx-auto relative" >
            <div className="flex items-center justify-between max-md:flex-row-reverse max-md:py-1 py-4 border-b border-secondary-color_3 px-2" >
                <div className="flex items-center gap-6 max-md:hidden" >
                    <div className="flex items-center gap-3 hover:text-primary-color cursor-pointer transition-all ease-in-out duration-500" >
                        <span className="mt-1" >
                            <PhoneIcon className="w-[1.1rem] h-[1.1rem] font-bold text-primary-color" />
                        </span>
                        <p className="text-sm font-medium" >+9123 456 87</p>
                    </div>
                    <div className="flex items-center gap-3 hover:text-primary-color cursor-pointer transition-all ease-in-out duration-500" >
                        <span>
                            <EnvelopeIcon className="w-5 h-5 font-bold text-primary-color" />
                        </span>
                        <p className="text-sm font-medium" >creto@gmail.com</p>
                    </div>
                </div>
                <span className="w-8 h-8 hidden max-md:block cursor-pointer" >
                    <button className={`menu ${menuOpen ? 'opened' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Main Menu">
                        <svg width="30" height="30" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </span>
                {isLoggedIn ?
                 <div className="flex items-center gap-2" >
                    <span className="relative cursor-pointer border-r border-secondary-color_3 pr-2" >
                        <Link to={"/user/wishlist"} ><HeartIcon className="w-5 h-5 max-md:w-4 hover:text-red-600 smooth_transition max-md:h-4 font-bold text-secondary-color_3" /></Link>
                        {/* <span className="absolute bottom-[45%] left-[40%] text-[0.6rem] bg-primary-color rounded-full w-4 h-4 text-center" >
                            6
                        </span> */}
                    </span>
                    <span className="relative border-r cursor-pointer border-secondary-color_3 pr-2" >
                        <Link to={"/user/cart"}><ShoppingCartIcon className="w-5 max-md:w-4 max-md:h-4 cursor-pointer h-5 font-bold text-secondary-color_3" />
                            {cart?.count > 0 && <span className="absolute bottom-[45%] left-[40%] text-[0.6rem] bg-primary-color rounded-full w-4 h-4 text-center" >
                                {cart?.count}
                            </span>}
                        </Link>
                    </span>
                    <Link to={"/user/profile"} ><UserIcon className="w-5 h-5 max-md:w-4 max-md:h-4 font-bold text-secondary-color_3 cursor-pointer" /></Link>
                </div>
                    :
                    <Link to={'/auth/signin'} className=" smooth_transition hover:border-secondary-color hover:shadow-lg font-[Teko] text-xl text-secondary-color hover:text-primary-color px-4 border border-primary-color" >Login</Link>
                }
            </div>
            <div className="flex items-center max-md:justify-center max-md:py-2 justify-between px-2" >
                <Link to={"/"} className="max-md:w-24" >
                    <img src={logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-5 max-md:hidden font-[Teko] text-lg font-extralight tracking-wider" >
                    {
                        navbarData.map((item, idx) => (
                            <Link to={item.path} className={`h-full py-4 ${item.path === "logout" && "hidden"} relative group cursor-pointer`} key={idx} >{item.name} <span className="absolute hidden group-hover:block nav_top_animation_in -top-[3%] rounded-lg left-auto right-auto h-[3px] bg-primary-color">{" "}</span></Link>
                        ))
                    }
                </div>
            </div>
            <OpenMenu open={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
    )
}

export default Header
