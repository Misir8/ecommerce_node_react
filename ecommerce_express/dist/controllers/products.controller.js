"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = void 0;
const products_1 = __importDefault(require("../data/products"));
const getProducts = (req, res) => {
    res.json(products_1.default).end();
};
exports.getProducts = getProducts;
const getProductById = (req, res) => {
    //res.json(products.find(product => product._id === req.params.id)).end();
};
exports.getProductById = getProductById;
