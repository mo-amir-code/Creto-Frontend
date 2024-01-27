export interface AppSliceType{
    makePayment: boolean,
    paymentStatus: string | null,
    selectedAddress: number
}

export interface OrderType{
   purchasedUserId: string,
    orderItems: [OrderItemType],
    deliveryAddress: DeliveryAddressType,
    paymentMode: string,
    totalAmount: number,
  }

  export interface OrderItemType{
    title?:string,
    productId: string,
    currentPrice: number,
    quantity: number,
    color: string,
    frameSize:string,
    wheelSize: string,
  }

  export interface DeliveryAddressType{
    name: string,
    email: string,
    address: string,
    country: string,
    state: string,
    city: string,
    postalCode: number,
    mobileNo: number,
  }