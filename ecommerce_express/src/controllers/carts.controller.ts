import {json, NextFunction, Request, Response} from "express";
import {redisClient} from '../utils/redis'
import {CustomerCart} from "../models/customerCart";
import HttpException from "../exceptions/HttpException";


export const getCart = (req: Request, res: Response) => {
    redisClient.get(req.params.id, (err, data) => {
       return  data ? res.json(JSON.parse(data) ): res.json(new CustomerCart(req.params.id));
    });

}

export const addItemToCart = (req: Request, res: Response, next: NextFunction) => {
    const customerCart: CustomerCart = req.body as CustomerCart;
    redisClient.set(customerCart.id, JSON.stringify(customerCart),(error, ok) => {
        if(!ok){
            return res.status(200).json(new CustomerCart(req.params.id));
        }else{
            return redisClient.get(req.params.id, (err, data) => {
                return  data ? res.json(JSON.parse(data) ): res.json(new CustomerCart(req.params.id));
            });
        }
    })
}

export const deleteItemCart = (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    redisClient.del(id, function(err, response) {
        if (response == 1) {
            return res.send("Deleted Successfully!");
        } else{
            return next(new HttpException(404, 'Item not found'));
        }
    })
}