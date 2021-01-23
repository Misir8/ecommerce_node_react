import React, {FC} from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom"
import {IProduct} from "../../models/Product";
import Rating from "./Rating";

type IProps = {
  product: IProduct
};

const Product: FC<IProps> = ({product}) => {
    return (
        <>
            <Card className="p-3 my-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top"/>
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <div className="my-3">
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                            {product.rating} from {product.numReviews} reviews
                        </div>
                    </Card.Text>
                    <Card.Text as="h3">
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Product;
