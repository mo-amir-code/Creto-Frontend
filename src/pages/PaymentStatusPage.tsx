import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import paymentStatus from "../assets/payment/card-success.png"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteUserCartItemsAsync } from "../redux/product/productAsyncThunk";
import { selectIsLoggedIn, selectLoggedInUser } from "../redux/auth/authSlice";
import { selectPaymentStatus, setPaymentStatus } from "../redux/app/appSlice";


const PaymentStatusPage = () => {
    const { status } = useParams();
    const navigate = useNavigate();
    const disptach = useAppDispatch();
    const loggedInUser = useAppSelector(selectLoggedInUser);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const isPayment = useAppSelector(selectPaymentStatus);

    useEffect(() => {
        if (!status || !isPayment) {
            navigate("/");
        }

        let timeoutId: any;

        if ((status === "success" || status === "cancel") && isLoggedIn) {
            timeoutId = setTimeout(() => {
                disptach(setPaymentStatus(null));
                navigate("/");
            }, 5000);

            if (status === "success") {
                disptach(deleteUserCartItemsAsync({ all: true, userId: loggedInUser?.userId }));
            }
            disptach(setPaymentStatus(status));
        }

        return () => {

            if (timeoutId) {
                clearTimeout(timeoutId);
            }

        }
    }, [status]);

    return (
        <div className="max-w-6xl h-screen w-full mx-auto py-4 px-4" >
            <div className="flex flex-col h-full items-center justify-center" >
                {
                    status === "success" && <>
                        <div className="max-w-lg max-sm:max-w-sm -translate-y-20" >
                            <img src={paymentStatus} alt="payment success" />
                        </div>
                        <div className="flex px-4 flex-col items-center justify-start max-md:-translate-y-28 -translate-y-44" >
                            <h2 className="text-2xl text-center max-sm:text-lg font-semibold text-secondary-color" >Payment received.</h2>
                            <p className=" max-sm:text-xs text-center" >You will be automically redirect to the home page.</p>
                        </div>
                    </>
                }
                {
                    status === "cancel" && <div className="px-4 -translate-y-16">
                        <h2 className="text-2xl text-center max-sm:text-lg font-semibold text-red-600" >Payment Failed.</h2>
                        <p className="text-center max-sm:text-xs w-full" >You will be automically redirect to the home page.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default PaymentStatusPage
