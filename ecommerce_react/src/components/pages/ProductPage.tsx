import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../models/Product";
import { Link } from 'react-router-dom';
import {Col, Row, Image, ListGroup, Card, Button} from "react-bootstrap";
import Rating from "../product/Rating";
import axios from "axios";

type IProps = {
    match: any;
}

const ProductPage: FC<IProps> = ({match}) => {

    const [product, setProduct] = useState<IProduct>({
        _id: "",
        brand: "",
        category: "",
        countInStock: 0,
        description: "",
        image: "",
        name: "",
        numReviews: 0,
        price: 0,
        rating: 0
    });
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get<IProduct>(`http://localhost:5000/api/products/${match.params.id}`);
            setProduct(data);
        }
        fetchProduct();
    });

    const productTemplate = product ?
        <>
            <Link to='/' className="btn btn-primary my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col lg={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        <strong>${product.countInStock > 0 ? "In Stock" : "Out in Stock"}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn btn-block btn-dark" disabled={(product.countInStock === 0)}>ADD TO CART</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </> :
        null;
    return (
        <div>
            {productTemplate}
        </div>
    );

};

export default ProductPage;
