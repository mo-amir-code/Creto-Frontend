import { httpAxios } from "../../services";
import { CartDataType } from "./productTypes";


export const getAllProducts = () => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get('/product/all');
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}


export const getTopSellProducts = () => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get('/product/top-sell');
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const getProductById = ({productId}:{productId: string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get(`/product/pid/${productId}`);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const addToCart = ({data}:{data: CartDataType}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post(`/product/add-to-cart`, data);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const fetchCartCount = ({userId}:{userId: string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get(`/product/cart-count?userId=${userId}`);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const fetchCartData = ({userId}:{userId: string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get(`/product/cart-data?userId=${userId}`);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const editCart = ({quantity, cartId}:{quantity: number, cartId:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.patch(`/product/cart-edit`, {quantity, cartId});
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const deleteCart = ({cartId}:{cartId:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.delete(`/product/cart/${cartId}`);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const searchByQuery = ({query}:{query:string}) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.get(`/product/search?${query}`);
            resolved(response.data);
        } catch (err: any) {
            console.error(err.message);
            rejected(err.response.data);
        }
    })
}