import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Product from "../product/Product";
import {IProduct} from "../../models/Product";
import axios from "axios";

const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
       const fetchProducts = async () => {
          const {data} = await axios.get<IProduct[]>('http://localhost:5000/api/products/');
          setProducts(data);
       };
       fetchProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} xs={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomePage;
