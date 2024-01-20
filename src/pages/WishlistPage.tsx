import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectUserWishlist } from "../redux/user/userSlice";
import { fetchUserWishlistProductsAsync } from "../redux/user/userAsyncThunk";
import { selectIsLoggedIn, selectLoggedInUser } from "../redux/auth/authSlice";
import ProductCard from "../components/ProductCard";
import NoData from "../components/NoData";



const WishlistPage = () => {
    const dispatch = useAppDispatch();
    const wishlist = useAppSelector(selectUserWishlist);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const loggedInUser = useAppSelector(selectLoggedInUser);

    useEffect(() => {
        if(isLoggedIn && loggedInUser && !(wishlist.data.length > 0)){
            dispatch(fetchUserWishlistProductsAsync({userId:loggedInUser.userId}));
        }
    }, []);

    if(!(wishlist.data.length > 0)){
        return (
            <div>
                <NoData subline="Ohh! Wishlist is empty" />
            </div>
        )
    }
    
  return (
    <div className="max-w-6xl p-4 w-full mx-auto space-y-4 py-8" >
        <h1 className="text-4xl font-bold font-[Teko] w-full text-center text-secondary-color" >Wishlist</h1>        
        <div className="flex items-center flex-wrap gap-2 justify-center" >
            {
                wishlist?.data?.map((wish, idx) => (
                    <ProductCard key={idx} {...wish} />
                ))
            }
        </div>
    </div>
  )
}

export default WishlistPage
