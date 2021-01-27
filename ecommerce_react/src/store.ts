import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {productListReducers} from "./reducers/productReducers";
import {ProductState} from "./types/products/productListTypes";
import {ProductDetailsState} from "./types/products/productDetailsTypes";
import {productDetailsReducers} from "./reducers/productDetailsReducers";

export interface RootState {
    productList: ProductState;
    productDetails: ProductDetailsState
}

const rootReducer = combineReducers<RootState>({
    productList: productListReducers,
    productDetails: productDetailsReducers
});

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;