"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const users = [
    {
        name: 'Admin user',
        email: 'misir@gmail.com',
        password: bcrypt_1.default.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: bcrypt_1.default.hashSync('123456', 10),
    },
    {
        name: 'Kamil',
        email: 'kamil@gmail.com',
        password: bcrypt_1.default.hashSync('123456', 10),
    }
];
exports.default = users;
