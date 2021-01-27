import {ProductActions, ProductListTypes} from "../types/productListTypes";
import {Dispatch} from "redux";
import axios from "axios";

export const productListAction = () => async (dispatch: any): Promise<Dispatch<ProductActions>> => {
    try {
        dispatch({type: ProductListTypes.REQUEST_PRODUCT_LIST});
        const {data} = await axios.get('http://localhost:5000/api/products');
        return dispatch({payload: {products: data, loading: false, error: false},
            type: ProductListTypes.GET_PRODUCT_LIST});
    }catch (error){
        return dispatch({payload: {data: [], loading: false, error: true},
            type: ProductListTypes.FAIL_GET_PRODUCT_LIST});
    }
}