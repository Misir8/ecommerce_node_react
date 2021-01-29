import express, {Router} from "express";
import {addItemToCart, deleteItemCart, getCart} from "../controllers/carts.controller";

const router: Router = express.Router();

router.route('/:id')
    .get(getCart)
    .post(addItemToCart)
    .delete(deleteItemCart)

export default router;