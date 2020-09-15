import React, { useState, useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {CartContext} from '../../App';
import { Link, useParams } from 'react-router-dom';
import fakeFoods from '../../FakeFoods/FakeFoods';

const Dish = () => {
    const [cart, setCart] = useContext(CartContext);
    let { dish } = useParams();
    const showDish = fakeFoods.find(food => food.id === dish)

    // adjusting count
    const [count, setCount] = useState(1);
    const add = () => setCount(count+1);
    const reduce = () => setCount(count-1);
    if (count < 1) {setCount(1)}

    // add button
    const [disable, setDisable] = useState(false);
    function addToCart(id) {
        setDisable(true);
        showDish.count = count;
        setCart([...cart, showDish])
    };
    
    return (
        <Container id="dish" className="py-5">
            <Row className="align-items-center justify-content-center">
                <Col md="6" className="text-left">
                    <h1 className="text-success">{showDish && showDish.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos voluptates quis qui modi! Dignissimos molestias illum quos delectus distinctio eligendi mollitia recusandae vel! Voluptates iste quo dolorem inventore sapiente.</p>
                    <h3>${showDish && (showDish.price * count).toFixed(2)}</h3>
                    <div className="my-4">
                        <button onClick={reduce}>-</button>
                        <span className="mx-2" aria-readonly>{count}</span>
                        <button onClick={add}>+</button>
                    </div>
                </Col>
                <Col md="6">
                    <img src={showDish && showDish.photo} alt={showDish && showDish.name} className="w-100 my-3" />
                </Col>
            </Row>
            <Link to="/">
                <Button variant="primary">&lt; Back</Button>
            </Link>
            <Button disabled={disable} onClick={()=>addToCart(showDish.id)} variant="danger" className="mx-2">{disable ? 'Added' : 'Add'}</Button>
        </Container>
    );
};

export default Dish;