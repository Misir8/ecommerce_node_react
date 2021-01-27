import {ProductDetailsActions, ProductDetailsState, ProductDetailsTypes} from "../types/products/productDetailsTypes";
import {IProduct} from "../models/Product";

const initialState: ProductDetailsState = {error: false, loading: false, product: {} as IProduct}

export const productDetailsReducers = (state = initialState, action: ProductDetailsActions): ProductDetailsState => {
    switch (action.type) {
        case ProductDetailsTypes.REQUEST_PRODUCT_DETAILS:
            return {...state, error: false, product: {} as IProduct, loading: true};
        case ProductDetailsTypes.GET_PRODUCT_DETAILS:
            return {...state, error: false, product: action.payload.product, loading: false};
        case ProductDetailsTypes.FAIL_PRODUCT_DETAILS:
            return {...state, error: true, product:  {} as IProduct, loading: false};
        default:
            return initialState;
    }
}