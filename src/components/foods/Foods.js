import React from 'react';
import { Row, Tab, Tabs, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Food from './Food';
import './Food.css'


const Foods = ({ foods }) => {
    const cart = useSelector(state => state.cart);
    
    // food categories
    const breakfast = foods.filter(food => food.category === 'breakfast')
    const lunch = foods.filter(food => food.category === 'lunch')
    const dinner = foods.filter(food => food.category === 'dinner')

    return (
        <Container id="foods" className="text-center py-5">
            <Tabs className="d-flex justify-content-center border-0 d-block"  defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="breakfast" title="Breakfast">
                    <Row className="mt-4">
                        <Food category={breakfast} />
                    </Row>
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                    <Row className="mt-4">
                        <Food category={lunch} />
                    </Row>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    <Row className="mt-4">
                        <Food category={dinner} />
                    </Row>
                </Tab>
                <Tab eventKey="all" title="All Foodes">
                    <Row className="mt-4">
                        <Food category={foods} />
                    </Row>
                </Tab>
            </Tabs>
            {
                cart.length>0 && 
                <Link to="/cart">
                    <button className="btn btn-danger mt-4">Review Cart</button>
                </Link>
            }
        </Container>
    );
};

export default Foods;