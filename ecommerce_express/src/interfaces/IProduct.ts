import {Document} from "mongoose";
import mongoose from "mongoose";

interface IProduct extends Document{
    user: any,
    name: string,
    image: string,
    brand: string,
    category: string,
    description: string,
    reviews: [],
    rating: number,
    numReviews: number,
    price: number,
    countInStock: number
}

export default IProduct;
