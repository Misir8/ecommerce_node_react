import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import Product from "../product/Product";
import {useDispatch, useSelector} from "react-redux";
import {productListAction} from "../../actions/producActions";
import {RootState} from "../../store";

const HomePage = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state: RootState) => state.productList);
    const {error, loading, products} = productList;

    useEffect(() => {
        dispatch(productListAction())
    }, [dispatch])

    return (
            <>
                <h1>Latest Products</h1>
                {
                    loading ? <h1>Loading...</h1>
                        : error ? <h1>Error...</h1> :
                        <Row>
                            {products?.map(product => (
                                <Col key={product._id} xs={12} md={6} lg={4} xl={3}>
                                    <Product product={product}/>
                                </Col>
                            ))}
                        </Row>
                }
            </>
    );
};

export default HomePage;
