import React, { useContext } from 'react';
import './Food.css'
import { Card, Col, Row, Tab, Tabs, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import fakeFoods from '../../FakeFoods/FakeFoods'

// food categories
const breakfast = fakeFoods.filter(foods => foods.catagory === 'breakfast')
const lunch = fakeFoods.filter(foods => foods.catagory === 'lunch')
const dinner = fakeFoods.filter(foods => foods.catagory === 'dinner')

const Foods = () => {
    const [cart] = useContext(CartContext);

    const mapFoods = category => {
        return (
            category.map(food => 
            <Col md="4" key={food.id} className="my-3">
                <Card className="h-100 border-0">
                    <Link className="link" to={"/"+food.id}>
                        <Card.Img variant="top" className="w-50 mx-auto p-3" src={food.photo} />
                        <Card.Body>
                            <h5 className="text-danger">{food.name}</h5>
                            <h6>Buy one get one free</h6>
                            <h5 className="text-success">${food.price}</h5>
                        </Card.Body>    
                    </Link>
                </Card>
            </Col>
    ))} 

    return (
        <Container id="foods" className="text-center py-5">
            <Tabs className="d-sm-flex justify-content-center border-0 d-block"  defaultActiveKey="lunch" id="uncontrolled-tab-example">
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
            {
                cart.length>0 && 
                <Link to="/checkout">
                    <button className="btn btn-danger mt-4">Checkout</button>
                </Link>
            }
        </Container>
    );
};

export default Foods;