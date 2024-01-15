import { httpAxios } from "../../services";
import { AddAddressType } from "./userTypes";

export const fetchUser = ({userId}:{userId:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get(`/user/fetch?userId=${userId}`);
            resolved(response.data);
        } catch (error) {
            rejected(error);
        }
    })
}

export const addAddress = ({address}:{address:AddAddressType}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post(`/user/address`, address);
            resolved(response.data);
        } catch (error) {
            rejected(error);
        }
    })
}

export const removeAddress = ({userId, _id}:{userId:string, _id:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.delete(`/user/address`, {data: {userId, _id}});
            resolved(response.data);
        } catch (error) {
            rejected(error);
        }
    })
}