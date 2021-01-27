import {ProductListActions, ProductListTypes} from "../types/products/productListTypes";
import {Dispatch} from "redux";
import axios from "axios";
import {ProductDetailsActions, ProductDetailsTypes} from "../types/products/productDetailsTypes";

export const productListAction = () => async (dispatch: any): Promise<Dispatch<ProductListActions>> => {
    try {
        dispatch({type: ProductListTypes.REQUEST_PRODUCT_LIST});
        const {data} = await axios.get('http://localhost:5000/api/products');
        return dispatch({payload: {products: data, loading: false, error: false},
            type: ProductListTypes.GET_PRODUCT_LIST});
    }catch (error){
        return dispatch({payload: {products: [], loading: false, error: true},
            type: ProductListTypes.FAIL_GET_PRODUCT_LIST});
    }
}

export const productDetailsAction = (id: number) => async (dispatch: any): Promise<Dispatch<ProductDetailsActions>> => {
    try {
        dispatch({type: ProductDetailsTypes.REQUEST_PRODUCT_DETAILS});
        const {data} = await axios.get(`http://localhost:5000/api/products/${id}`);
        return dispatch({payload: {product: data, loading: false, error: false},
            type: ProductDetailsTypes.GET_PRODUCT_DETAILS});
    }catch (error){
        return dispatch({payload: {product: null, loading: false, error: true},
            type: ProductDetailsTypes.FAIL_PRODUCT_DETAILS});
    }
}