import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = ({ category }) => {
    return (
        category.map(food => 
        <Col sm="6" md="4" key={food.id} className="my-3">
            <Card className="h-100 border-0">
                <Link className="link" to={"/"+food.id}>
                    <Card.Img variant="top" className="w-50 mx-auto p-3" src={food.photo} />
                    <Card.Body>
                        <h5 className="text-danger">{food.name}</h5>
                        <h5 className="text-success">${food.price}.00</h5>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    ))
};

export default Food;