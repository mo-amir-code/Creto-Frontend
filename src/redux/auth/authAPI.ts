import { httpAxios } from "../../services"
import { loginType, signinWithGoogleType, signupType, verifyUserType } from "./authTypes";


export const loginUser = (data: loginType) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post('/auth/signin', data);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}


export const signupUser = (data: signupType) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post('/auth/signup', data);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const verifyUser = (data: verifyUserType) => {
    return new Promise(async (resolved, rejected) => {
        try {
            console.log(data);
            const response = await httpAxios.post('/auth/verify', data);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}

export const signinWithGoogle = (data: signinWithGoogleType) => {
    return new Promise(async (resolved, rejected) => {
        try {
            const response = await httpAxios.post('/auth/signin-with-google', data);
            resolved(response.data)
        } catch (err: any) {
            console.error(err.message)
            rejected(err.response.data)
        }
    })
}