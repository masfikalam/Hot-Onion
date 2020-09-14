import React from 'react';
import './Menu.css'
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import fakeFoods from '../../FakeFoods/FakeFoods'

// food categories
const breakfast = fakeFoods.filter(foods => foods.catagory === 'breakfast')
const lunch = fakeFoods.filter(foods => foods.catagory === 'lunch')
const dinner = fakeFoods.filter(foods => foods.catagory === 'dinner')

const mapFoods = category => {
    return (
    category.map(food => 
        <Col md="4" className="my-3">
            <Card className="h-100 border-0">
                <Card.Img variant="top" className="w-50 mx-auto p-3" src={food.photo} />
                <Card.Body>
                    <h5 className="text-danger">{food.name}</h5>
                    <h6>Buy one get one free</h6>
                    <h5 className="text-success">${food.price}</h5>
                </Card.Body>
            </Card>
        </Col>
    )
)} 

const Menu = () => {
    return (
        <Container id="menu" className="text-center py-5">
            <Tabs className="d-flex justify-content-center border-0"  defaultActiveKey="lunch" id="uncontrolled-tab-example">
                <Tab eventKey="breakfast" title="Breakfast">
                    <Row className="mt-4">
                        {mapFoods(breakfast)}
                    </Row>
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                    <Row className="mt-4">
                        {mapFoods(lunch)}
                    </Row>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    <Row className="mt-4">
                        {mapFoods(dinner)}
                    </Row>
                </Tab>
            </Tabs>
            <button className="btn btn-danger mt-4">Checkout</button>
        </Container>
    );
};

export default Menu;