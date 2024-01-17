import { ProductType } from "../../components/componentsTypes";


export interface ProductSliceType{
    products:{
        status: string | null,
        data:[ProductType] | []
    },
    topSellProducts:{
        status: string | null,
        data:[ProductType] | []
    },
    filteredProducts:{
        status: string | null,
        data:[ProductType] | [],
        totalCount: number
    },
    product: {
        status: string | null,
        data: ProductType | null
    },
    relatedProducts: {
        status: string | null,
        data: [ProductType] | []
    },
    cart:{
        status: string | null,
        data: [CartDataType] | [],
        count: number
    }
}

export interface CartDataType{
    _id?:string,
    productId:string | CartItemObjectType,
    purchasedUserId:string,
    currentPrice:number,
    quantity:number,
    color:string,
    frameSize:string,
    wheelSize:number
}

export interface CartItemObjectType{
    specs: {
      frameSize: [string],
      wheelSize: [number],
      class: string,
      nos: string,
      cr: string
    },
    title: string,
    _id: string,
    thumbnail: string,
    type: string
}
