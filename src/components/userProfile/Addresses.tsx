import { MapPinIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { AddressType } from "../../redux/user/userTypes"
import { useState } from "react"
import AddAddressModal from "./AddAddressModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn, selectLoggedInUser } from "../../redux/auth/authSlice";
import { removeAddressAsync } from "../../redux/user/userAsyncThunk";
import { toast } from "react-toastify";


const Addresses = ({ addresses }: { addresses: [AddressType] | [] | undefined }) => {
    const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);

    return (
        <div className="pb-8 pt-4 border-b border-secondary-color" >
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 w-full py-4" >
                {addresses && addresses.map((address, idx) => (
                    <Address key={idx} address={address} idx={idx} />
                ))}
            </div>
            <button onClick={() => setIsAddAddressOpen(true)} className="bg-secondary-color/5 text-sm font-semibold hover:-translate-y-1 shadow-md p-2 rounded-lg flex items-center gap-1 smooth_transition" >
                <PlusIcon className="w-4 h-4" /><span>ADD NEW ADDRESS</span>
            </button>

            <AddAddressModal open={isAddAddressOpen} setOpen={setIsAddAddressOpen} />
        </div>
    )
}

export default Addresses

export const Address = ({ selected, address, idx, setSelected }: { selected?: boolean, address: AddressType, idx: number, setSelected?: Function }) => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const loggedInUser = useAppSelector(selectLoggedInUser);

    const handleRemoveAddress = () => {
        if(isLoggedIn && loggedInUser && address._id){
            dispatch(removeAddressAsync({userId:loggedInUser.userId, _id:address._id}));
        }else{
            toast.error("You are not logged in.");
        }
    }

    const handleSetSelected = () => {
        if (setSelected) {
            setSelected(idx);
        }
    }

    return (
        <div onClick={handleSetSelected} className={`col-span-1 relative bg-secondary-color/5 shadow-md p-3 ${selected ? "border-primary-color" : "border-transparent"} border-2 rounded-lg smooth_transition`} >
            <p className="inline-flex space-x-1 text-sm" ><div className="w-4 h-4 pt-[0.1rem]" ><MapPinIcon className="w-4 h-4" /></div><span>{address.address}, {address.city}, {address.city}, {address.country}</span></p>
            <div onClick={handleRemoveAddress} className="absolute top-3 right-4 hover:-translate-y-1 smooth_transition bg-primary-color hover:bg-white active:bg-primary-color p-1 rounded-full shadow-lg " >
                <XMarkIcon className="w-4 h-4 " />
            </div>
        </div>
    )
} 
