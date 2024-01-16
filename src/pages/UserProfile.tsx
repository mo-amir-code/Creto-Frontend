import { useEffect } from "react"
import Addresses from "../components/userProfile/Addresses"
import UserHero from "../components/userProfile/UserHero"
import UserOrders from "../components/userProfile/UserOrders"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectIsLoggedIn, selectLoggedInUser } from "../redux/auth/authSlice"
import { fetchUserAsync } from "../redux/user/userAsyncThunk"
import { selectUserInfo } from "../redux/user/userSlice"


const UserProfile = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const loggedInUser = useAppSelector(selectLoggedInUser);
  const userInfo = useAppSelector(selectUserInfo);

  useEffect(() => {
    if (isLoggedIn && loggedInUser && !userInfo.data) {
      dispatch(fetchUserAsync({ userId: loggedInUser?.userId }));
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto w-full p-4" >
      <UserHero userInfo={userInfo.data} />
      <Addresses addresses={userInfo.data?.addresses} />
      <UserOrders />
    </div>
  )
}

export default UserProfile
