import { httpAxios } from "../../services";
import { PromotionDataType } from "./promotionTypes";


export const createPromotion = ({data}:{data:PromotionDataType}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post('/promotion/create', data);
            resolved(response.data);
        } catch (error:any) {
            console.log(error);
            rejected(error.response.data);
        }
    });
}

export const fetchPromotion = () => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get('/promotion/promotions');
            resolved(response.data);
        } catch (error:any) {
            console.log(error);
            rejected(error.response.data);
        }
    });
}