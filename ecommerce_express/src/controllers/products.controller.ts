import {Request, Response} from 'express';
import products from "../data/products";

export const getProducts = (req: Request, res: Response) => {
    res.json(products).end();
}

export const getProductById = (req: Request, res: Response) => {
    //res.json(products.find(product => product._id === req.params.id)).end();
}
