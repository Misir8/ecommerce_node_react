"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_route_1 = __importDefault(require("./product.route"));
exports.baseRouter = express_1.default.Router();
exports.baseRouter.use('/products', product_route_1.default);
