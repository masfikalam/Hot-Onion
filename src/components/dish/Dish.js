import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Dish.css';
import { db } from '../../Firebase/Firebase';

const Dish = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const [dish, setDish] = useState({});
    const [count, setCount] = useState(1);
    const [disable, setDisable] = useState(false);
    document.title = `Red Onion - ${dish ? dish.name : 'Food'}`;

    useEffect(() => {
        db.collection("items").doc(id)
        .onSnapshot(snapshot => {
            setDish(snapshot.data());
    })}, [id]);

    // adjusting count
    const add = () => setCount(count+1);
    const reduce = () => count === 1 ? setCount(1) : setCount(count-1);

    // add button
    function addToCart(dish) {
        setDisable(true);
        dish.count = count;
        dispatch({
            type: 'ADD_FOOD',
            payload: { ...dish, id }
        });
    };
    
    return (
        <Container id="dish" className="py-5">
            <h2 className="text-center mb-4">
                Food : <span className="text-success">{dish.name}</span>
            </h2>
            <Row className="align-items-center">
                <Col md="6" className="text-center mb-5 mb-md-0">
                    <img src={dish.photo} alt={dish.name} className="w-75 my-3 img-fluid" />
                </Col>
                <Col md="6" className="text-left">
                    <h4>You'll have -</h4>
                    <div className="ingredients mt-3 mb-4">
                        {
                            dish.ingredients ?
                            dish.ingredients.split(',').map(ing => 
                            <span key={ing} className="m-1 px-3 py-2 rounded">{ing}</span>) :
                            <span></span>
                        }
                    </div>

                    <h4 className="mt-5">Price: 
                        <span className="text-success"> ${(dish.price * count).toFixed(2)}</span>
                    </h4>
                    <div className="mt-3 mb-5">
                        <button className="btn btn-light border" onClick={reduce}>-</button>
                        <input style={{width: '50px'}} className="text-center border-0" placeholder={count} type="text" readOnly />
                        <button className="btn btn-light border" onClick={add}>+</button>
                    </div>
                    <Link to="/">
                        <Button variant="primary">&lt; Back</Button>
                    </Link>
                    <Button disabled={disable} onClick={() => addToCart(dish)} variant="danger" className="mx-2">{disable ? 'Added' : 'Add'}</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Dish;