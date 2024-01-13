import pi from "../../assets/brand/logo.png";

const UserHero = () => {
    return (
        <div className="w-full flex items-center py-4 border-b gap-2 border-secondary-color" >
            {/* User image */}
            <div className="flex items-center justify-center" >
                <div className="w-14 border rounded-full p-2 overflow-hidden" >
                    <img src={pi} alt="" className="w-14" />
                </div>
            </div>

            {/* User Info */}
            <div className="" >
                <h1 className="text-lg font-bold font-[Teko]" >Lorem ipsum dolor sit.</h1>
                <h2 className="text-sm font-medium" >Email: mo.amir.code@gmai.com, Phone: 7894561230</h2>
            </div>
        </div>
    )
}

export default UserHero
