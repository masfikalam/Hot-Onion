import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeFoods from '../../FakeFoods/FakeFoods';
import { useDispatch } from 'react-redux';

const Dish = () => {
    let { dish } = useParams();
    const dispatch = useDispatch();
    document.title = `Red Onion - ${dish}`;
    const showDish = fakeFoods.find(food => food.id === dish);
    const [disable, setDisable] = useState(false);

    // adjusting count
    const [count, setCount] = useState(1);
    const add = () => setCount(count+1);
    const reduce = () => {
        count === 1 ? setCount(1) : setCount(count-1);
    };

    // add button
    function addToCart(dish) {
        setDisable(true);
        showDish.count = count;
        dispatch({
            type: 'ADD_FOOD',
            payload: { ...dish, count }
        });
    };
    
    return (
        <Container id="dish" className="py-5">
            <Row className="align-items-center justify-content-center">
                <Col md="6" className="text-left">
                    <h1 className="text-success">{showDish && showDish.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos voluptates quis qui modi! Dignissimos molestias illum quos delectus distinctio eligendi mollitia recusandae vel! Voluptates iste quo dolorem inventore sapiente.</p>
                    <h3>${showDish && (showDish.price * count).toFixed(2)}</h3>
                    <div className="my-4">
                        <button className="btn btn-light border" onClick={reduce}>-</button>
                        <input className="w-25 text-center border-0" placeholder={count} type="text" readOnly />
                        <button className="btn btn-light border" onClick={add}>+</button>
                    </div>
                </Col>
                <Col md="6">
                    <img src={showDish && showDish.photo} alt={showDish && showDish.name} className="w-100 my-3" />
                </Col>
            </Row>
            <Link to="/">
                <Button variant="primary">&lt; Back</Button>
            </Link>
            <Button disabled={disable} onClick={() => addToCart(showDish)} variant="danger" className="mx-2">{disable ? 'Added' : 'Add'}</Button>
        </Container>
    );
};

export default Dish;