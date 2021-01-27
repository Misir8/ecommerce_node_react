import {NextFunction, Request, Response} from 'express';
import Product from "../models/productModel";
import HttpException from "../exceptions/HttpException";

export const getProducts = async (req: Request, res: Response): Promise<any> => {
    const products = await Product.find();
    return res.json(products);
}

export const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id)
        return res.json(product);
    } catch (error) {
       next(new HttpException(404, `Not Found product with id ${id}`));
    }
}
