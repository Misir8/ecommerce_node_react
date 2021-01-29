import {ProductListActions, ProductState, ProductListTypes} from "../types/products/productListTypes";


const initialState: ProductState = {products: [], loading: false, error: false}

export const productListReducer = (state = initialState, action: ProductListActions): ProductState => {
    switch (action.type) {
        case ProductListTypes.REQUEST_PRODUCT_LIST:
            return {...state, error: false, products: [], loading: true};
        case ProductListTypes.GET_PRODUCT_LIST:
            return {...state, error: false, products: action.payload.products, loading: false};
        case ProductListTypes.FAIL_GET_PRODUCT_LIST:
            return {...state, error: true, products: [], loading: false};
        default:
            return initialState;
    }
}


