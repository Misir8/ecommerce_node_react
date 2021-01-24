import express, {Router} from "express";
import {getProducts, getProductById} from '../controllers/products.controller'

const router: Router = express.Router();

router.route('/')
    .get(getProducts)

router.route('/:id/')
    .get(getProductById)

export default router;
