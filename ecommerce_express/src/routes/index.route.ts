import express, {Router} from "express";
import productRouter from './product.route';
import cartRouter from  './cart.route';

export const baseRouter: Router = express.Router();

baseRouter.use('/products', productRouter);
baseRouter.use('/carts', cartRouter);
