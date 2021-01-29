import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {productListReducer} from "./reducers/productReducer";
import {ProductState} from "./types/products/productListTypes";
import {ProductDetailsState} from "./types/products/productDetailsTypes";
import {productDetailsReducer} from "./reducers/productDetailsReducer";


export interface RootState {
    productList: ProductState;
    productDetails: ProductDetailsState
}

const rootReducer = combineReducers<RootState>({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;