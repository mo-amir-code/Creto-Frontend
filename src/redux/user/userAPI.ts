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

export const addProductToWishlist = ({userId, _id}:{userId:string, _id:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post(`/user/wishlist`, {userId, _id});
            resolved(response.data);
        } catch (error) {
            rejected(error);
        }
    })
}

export const removeProductFromWishlist = ({userId, _id}:{userId:string, _id:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.delete(`/user/wishlist`, {data: {userId, _id}});
            resolved(response.data);
        } catch (error) {
            rejected(error);
        }
    })
}

export const fetchUserWishlistProducts = ({userId}:{userId:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get(`/user/wishlist?userId=${userId}`);
            resolved(response.data);
        } catch (error) {
            rejected(error);
        }
    })
}


export const fetchUserOrders = ({userId}:{userId:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get(`/order/all?userId=${userId}`);
            resolved(response.data);
        } catch (error:any) {
            console.log(error)
            rejected(error.response.data);
        }
    })
}

export const deleteUserOrder = ({orderId}:{orderId:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.delete(`/order/delete`, {data: {orderId}});
            resolved(response.data);
        } catch (error:any) {
            console.log(error)
            rejected(error.response.data);
        }
    })
}