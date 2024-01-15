import { Dialog, Transition } from '@headlessui/react';
import Form from '../checkout/Form';
import { FormDataType } from '../checkout/FormArea'
import { Fragment, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addAddressAsync } from '../../redux/user/userAsyncThunk';
import { selectLoggedInUser } from '../../redux/auth/authSlice';
import { toast } from 'react-toastify';

const AddAddressModal = ({ open, setOpen }: { open: boolean, setOpen: Function }) => {
    const cancelButtonRef = useRef(null);
    const loggedInUser = useAppSelector(selectLoggedInUser);
    const dispatch = useAppDispatch();
    const handleOnSubmit = (data: FormDataType) => {
        if (loggedInUser && data) {
            const addressData = { ...data, userId: loggedInUser?.userId, };
            dispatch(addAddressAsync({ address: addressData }));
            setOpen(false);
        } else {
            toast.error("Something went wrong!");
        }
    }


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative mx-4 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-3xl">
                                <div className={`px-4 py-6 w-full shadow-lg bg-white rounded-lg`} >
                                    <h2 className="text-3xl font-[Teko] font-semibold max-sm:text-2xl" >Add a new address</h2>
                                    <Form handleOnSubmit={handleOnSubmit} />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default AddAddressModal
