

export interface PromotionInitialStateType {
    promotions: {
        status: string | null,
        data: [PromotionDataType] | [] 
    }
}

export interface PromotionDataType{
    _id:string,
    productId:string,
    title:string,
    description:string,
    image:string,
}