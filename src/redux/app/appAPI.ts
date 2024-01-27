import { httpAxios } from "../../services";
import { OrderType } from "./appTypes";


export const makePaymentRequest = ({data}:{data:OrderType}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post("/order/make-payment", data);
            resolved(response.data);
        } catch (error:any) {
            console.log(error)
            rejected(error.response.data);
        }
    })
}
