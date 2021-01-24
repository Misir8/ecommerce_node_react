import express, {Router} from "express";
import productRouter from './product.route';

export const baseRouter: Router = express.Router();

baseRouter.use('/products', productRouter);
