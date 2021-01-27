import {IProduct} from "../../models/Product";

export enum ProductDetailsTypes {
    REQUEST_PRODUCT_DETAILS = 'REQUEST_PRODUCT_DETAILS',
    GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS',
    FAIL_PRODUCT_DETAILS = 'FAIL_PRODUCT_DETAILS'
}

export interface ProductDetailsState{
    loading: boolean,
    product: IProduct,
    error: boolean
}

interface RequestProductType {
    type: ProductDetailsTypes.REQUEST_PRODUCT_DETAILS,
    payload: ProductDetailsState,
}

interface ProductDetailsType{
    type: ProductDetailsTypes.GET_PRODUCT_DETAILS,
    payload: ProductDetailsState
}

interface ProductDetailsFailType{
    type: ProductDetailsTypes.FAIL_PRODUCT_DETAILS,
    payload: ProductDetailsState
}



export type ProductDetailsActions = RequestProductType | ProductDetailsType | ProductDetailsFailType;