import {IProduct} from "../../models/Product";

export enum ProductListTypes {
    REQUEST_PRODUCT_LIST = 'REQUEST_PRODUCT_LIST',
    GET_PRODUCT_LIST = 'GET_PRODUCT_LIST',
    FAIL_GET_PRODUCT_LIST = 'FAIL_GET_PRODUCT_LIST'
}

export interface ProductState{
    loading: boolean,
    products: IProduct[],
    error: boolean
}

interface RequestProductType {
    type: ProductListTypes.REQUEST_PRODUCT_LIST,
    payload: ProductState,
}

interface ProductListType{
    type: ProductListTypes.GET_PRODUCT_LIST,
    payload: ProductState
}

interface ProductListFailType{
    type: ProductListTypes.FAIL_GET_PRODUCT_LIST,
    payload: ProductState
}



export type ProductListActions = RequestProductType | ProductListType | ProductListFailType;