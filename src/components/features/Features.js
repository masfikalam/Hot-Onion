import React from 'react';
import './Features.css'
import price from './price.png';
import taste from './taste.png';
import delivery from './delivery.png';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <Container id="features" className="my-5">
            <h3>Why you should choose us</h3>
            <p className="lead mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur eligendi, iste earum assumenda delectus aspernatur saepe ipsum! Ducimus.</p>
            <Row>
                <Col md={4}>
                    <Card className="h-100 border-0">
                        <Card.Img variant="top" className="mx-auto" src={price} />
                        <Card.Body>
                            <h5 className="text-primary">Food At Low Price</h5>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad eos alias quo quia officiis, vitae laboriosam dolorum quibusdam saepe cum unde accusamus, illo consectetur aperiam ipsum totam blanditiis error.</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0">
                        <Card.Img variant="top" className="mx-auto" src={taste} />
                        <Card.Body>
                            <h5 className="text-primary">Great Taste Of Food</h5>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad eos alias quo quia officiis, vitae laboriosam dolorum quibusdam saepe cum unde accusamus, illo consectetur aperiam ipsum totam blanditiis error.</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0">
                        <Card.Img variant="top" className="mx-auto" src={delivery} />
                        <Card.Body>
                            <h5 className="text-primary">Fast Home Delivery</h5>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad eos alias quo quia officiis, vitae laboriosam dolorum quibusdam saepe cum unde accusamus, illo consectetur aperiam ipsum totam blanditiis error.</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Features;