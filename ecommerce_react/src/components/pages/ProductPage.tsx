import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Image, ListGroup, Card, Button} from "react-bootstrap";
import Rating from "../product/Rating";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {productDetailsAction} from "../../actions/producActions";


type IProps = {
    match: any;
}

const ProductPage: FC<IProps> = ({match}) => {
    const {id} = match.params;
    const [count, setCount] = useState<number>(0);
    const dispatch = useDispatch();
    const productList = useSelector((state: RootState) => state.productDetails);
    const {error, loading, product} = productList;

    useEffect(() => {
        dispatch(productDetailsAction(id));
    }, [dispatch, id]);

    const addToCart = (id: string) =>{
        setCount(count + 1);
    }

    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
            error ? <h1>Error...</h1> :
            <div>
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
                                       <Row>
                                           <Col className="d-flex justify-content-center align-items-center">
                                               <Button
                                                   onClick={() => setCount(count - 1)}
                                                   className="btn btn-primary"
                                                   disabled={(count === 0)}>-</Button>
                                           </Col>
                                           <Col className="d-flex justify-content-center align-items-center">
                                               <span>{count}</span>
                                           </Col>
                                           <Col className="d-flex justify-content-center align-items-center">
                                               <Button
                                                    onClick={() => addToCart(product._id)}
                                                    className="btn btn-primary"
                                                    disabled={(product.countInStock <= count)}>+</Button>
                                           </Col>
                                       </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button className="btn btn-block btn-dark" disabled={(product.countInStock === 0)}>ADD
                                            TO CART</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </div>
        }
        </>
    );

};

export default ProductPage;
