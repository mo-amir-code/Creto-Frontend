import Addresses from "../components/userProfile/Addresses"
import UserHero from "../components/userProfile/UserHero"
import UserOrders from "../components/userProfile/UserOrders"


const UserProfile = () => {
  return (
    <div className="max-w-6xl mx-auto w-full p-4" >
        <UserHero />
        <Addresses />
        <UserOrders />
    </div>
  )
}

export default UserProfile
