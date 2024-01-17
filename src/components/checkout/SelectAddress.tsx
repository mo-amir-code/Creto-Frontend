import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUserInfo } from "../../redux/user/userSlice";
import { Address } from "../userProfile/Addresses"
import { selectSelectedAddress, setSelectedAddress } from "../../redux/app/appSlice";


const SelectAddress = () => {
    const userInfo = useAppSelector(selectUserInfo);
    const selected = useAppSelector(selectSelectedAddress);
    const dispatch = useAppDispatch();

    const handleSetAddress = (idx:string) => {
        dispatch(setSelectedAddress(idx));
    }

    return (
        <div>
            <div className="flex flex-col justify-center gap-3" >
                {
                    userInfo.data?.addresses.map((address, idx) => (
                        <Address key={idx} address={address} setSelected={handleSetAddress} selected={selected === idx? true : false} idx={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default SelectAddress
