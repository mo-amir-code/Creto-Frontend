import { ProductType } from "../../components/componentsTypes"

export interface UserSliceType{
    userInfo:{
        status: string | null,
        data: UserInfoType | null
    },
    userWishlist:{
        status: string | null,
        data: [ProductType] | []
      }
    userOrders:{
        status: string | null,
        data: [OrderType] | []
      }
}

export interface UserInfoType{
    _id:string,
    name:string,
    email:string,
    addresses:[AddressType] | [],
    role:string,
    photoUrl:string | null,
    wishlist: [string] | [] 
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

export interface APIAddressType{
    name: string,
    email: string,
    address: string,
    country: string,
    state: string,
    city: string,
    postalCode: number,
    mobileNo: number,
}


export interface OrderType{
    deliveryAddress: APIAddressType,
    _id: string,
    orderItems: [APIOrderItemType],
    orderStatus: string,
    paymentMode: string,
    totalAmount: number,
    createdAt: string,
    __v: 0
  }

export interface APIOrderItemType{
  productId: {
    _id: string,
    title: string,
    thumbnail: string
  },
  currentPrice: number,
  quantity: number,
  color: string,
  frameSize: string,
  wheelSize: string,
  _id: string
}