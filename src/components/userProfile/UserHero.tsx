import pi from "../../assets/brand/logo.png";
import { UserInfoType } from "../../redux/user/userTypes";

const UserHero = ({userInfo}:{userInfo:UserInfoType | null}) => {

    return (
        <div className="w-full flex items-center py-4 border-b gap-2 border-secondary-color" >
            {/* User image */}
            <div className="flex items-center justify-center" >
                <div className="w-14 border rounded-full p-2 overflow-hidden" >
                    <img src={userInfo?.photoUrl || pi} alt={userInfo?.name} className="w-14" />
                </div>
            </div>

            {/* User Info */}
            <div className="" >
                <h1 className="text-lg font-bold font-[Teko]" >{userInfo?.name}</h1>
                <h2 className="text-sm font-medium" >Email: {userInfo?.email}</h2>
            </div>
        </div>
    )
}

export default UserHero
