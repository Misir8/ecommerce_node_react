import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {productReducers} from "./reducers/productReducers";
import {ProductState} from "./types/productListTypes";

export interface RootState {
    productList: ProductState;
}

const rootReducer = combineReducers<RootState>({
    productList: productReducers
});

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;