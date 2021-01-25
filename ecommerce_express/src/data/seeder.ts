import dotenv from 'dotenv';
import connectDb from "../db/db";
import Order from "../models/orderModel";
import Product from "../models/productModel";
import User from "../models/userModel";
import users from "./users";
import IUser from "../interfaces/IUser";
import products from "./products";
import IProduct from "../interfaces/IProduct";

dotenv.config({path: './config/.env'});

connectDb();

const importData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users as unknown as IUser[]);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map(product => ({...product, user: adminUser}));

        await Product.insertMany(sampleProducts as unknown as IProduct[]);
        console.log('Data imported');
        process.exit();
    }catch (error){
        console.error(`Imported error ${error}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed');
        process.exit();
    }catch (error){
        console.error(`Destroyed error ${error}`);
        process.exit(1);
    }
}
//node src/data/seeder -d
if (process.argv[2] === '-d'){
    destroyData();
}else {
    importData();
}
