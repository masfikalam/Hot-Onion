import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Update.css'

const Update = ({ foods }) => {
    return (
        <section id="update" className="text-center py-5">
            <div className="container">
                <h3 className="text-center pb-4">Update Details</h3>
                <div className="row">
                    {
                        foods.length ?
                        foods.map(food =>
                        <Col sm="6" md="4" key={food.id} className="my-3">
                            <Card className="h-100 border-0">
                                <Card.Img variant="top" className="w-50 mx-auto p-3" src={food.photo} />
                                <Card.Body>
                                    <h5 className="text-danger">{food.name}</h5>
                                    <h5 className="text-success">${food.price}.00</h5>
                                    <button className="btn btn-sm mx-1 mt-3 btn-primary">Update</button>
                                    <button className="btn btn-sm mx-1 mt-3 btn-danger">Delete</button>
                                </Card.Body>
                            </Card>
                        </Col>) :
                        <div className="col-12 py-5">
                            <div className="spinner-border" role="status"></div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Update;