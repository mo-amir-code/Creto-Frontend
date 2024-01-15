export interface UserSliceType{
    userInfo:{
        status: string | null,
        data: UserInfoType | null
    }
}

export interface UserInfoType{
    _id:string,
    name:string,
    email:string,
    addresses:[AddressType] | [],
    role:string,
    photoUrl:string | null,
    wishlist: [string] | [] | null
}

export interface AddressType{
    _id:string,
    name: string,
    email: string,
    address: string,
    country: string,
    state: string,
    city: string,
    postalCode: number,
    mobileNo: number,
}

export interface AddAddressType{
    userId:string,
    name: string,
    email: string,
    address: string,
    country: string,
    state: string,
    city: string,
    postalCode: number,
    mobileNo: number,
}