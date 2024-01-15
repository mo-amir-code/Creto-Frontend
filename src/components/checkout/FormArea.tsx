import { selectIsLoggedIn, selectLoggedInUser } from "../../redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addAddressAsync } from "../../redux/user/userAsyncThunk";
import Form from "./Form"
import SelectAddress from "./SelectAddress"

export interface FormDataType {
    name: string,
    email: string,
    address: string,
    country: string,
    state: string,
    city: string,
    postalCode: number,
    mobileNo: number,
}

const FormArea = () => {
    const dispatch = useAppDispatch();
    const loggedInUser = useAppSelector(selectLoggedInUser);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const handleOnSubmit = (data: FormDataType) => {
        if (loggedInUser && isLoggedIn && data) {
            const addressData = { ...data, userId: loggedInUser?.userId, };
            dispatch(addAddressAsync({ address: addressData }));
        }
    }

    return (
        <div className="flex-[0.65] w-full mx-2 max-md:mx-0 py-2 space-y-4" >
            <div className="space-y-8" >
                {/* add address */}
                <div className="space-y-2 px-6 py-6 rounded-lg shadow-lg" >
                    <h2 className="text-3xl font-[Teko] font-semibold" >Address</h2>
                    <Form handleOnSubmit={handleOnSubmit} />
                </div>

                {/* Select Address */}
                <div className="space-y-2 px-6 py-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-[Teko] font-semibold" >Select Address</h2>
                    <SelectAddress />
                </div>
            </div>
        </div>
    )
}

export default FormArea
