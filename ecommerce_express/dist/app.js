"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_route_1 = require("./routes/index.route");
const db_1 = __importDefault(require("./db/db"));
dotenv_1.default.config({ path: './config/.env' });
db_1.default();
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use('/api', index_route_1.baseRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`port listening on ${PORT}`);
});
