import {CartItem} from "../interfaces/cartItem";

export class CustomerCart{
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    private _id: string;

    public CartItems: Array<CartItem> = new Array<CartItem>();

    constructor(id: string) {
        this._id = id;
    }

}