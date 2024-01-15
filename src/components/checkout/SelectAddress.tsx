import { useState } from "react"
import { useAppSelector } from "../../redux/hooks";
import { selectUserInfo } from "../../redux/user/userSlice";
import { Address } from "../userProfile/Addresses"


const SelectAddress = () => {
    const [selected, setSelected] = useState(0);
    const userInfo = useAppSelector(selectUserInfo);

    return (
        <div>
            <div className="flex flex-col justify-center gap-3" >
                {
                    userInfo.data?.addresses.map((address, idx) => (
                        <Address address={address} setSelected={setSelected} selected={selected === idx? true : false} idx={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default SelectAddress
