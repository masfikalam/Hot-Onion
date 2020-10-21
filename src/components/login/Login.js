import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import firebaseConfig from './FireConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'

firebase.initializeApp(firebaseConfig);

const Login = () => {
    document.title = 'Hot Onion - Login';
    const [user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [validForm, setValidForm] = useState(true);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from:{pathname:"/"}};

    // google sign in
    const googleSingIn = () => {
        const providerGL = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(providerGL)
        .then(result => {
            const {displayName, email} = result.user;
            const optUser = {
                signed: true,
                name: displayName,
                email: email,
                message: 'Login Successful'
            }
            setUser(optUser);
            history.replace(from);
        })
        .catch(error => {
            const optUser = {};
            optUser.message = error.message;
            setUser(optUser)
        });
    }

    // blur handler
    const handleBlur = (e) => {
        const optUser = {...user};
        optUser[e.target.name] = e.target.value;
        // confirming same password
        if(e.target.name === 'confirm'){
            if(e.target.value !== user.password){
                optUser.message = "Password Didn't Match";
                setValidForm(false);
            }
            else{
                optUser.message = '';
                setValidForm(true);
            }
        }
        setUser(optUser)
    }
    
    const subForm = (e) => {
        if (newUser){
            if(validForm) {
                // email sign in
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(() => {
                    const optUser = {
                        signed: true,
                        name: user.name,
                        email: user.email,
                        message: 'Login Successful'
                    }
                    setUser(optUser);
                    updateName(user.name)
                    history.replace(from);
                })
                .catch(error => {
                    const optUser = {};
                    optUser.message = error.message;
                    setUser(optUser)
                });
            }
        }
        if (!newUser) {
            // email login
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    const {displayName, email} = result.user;
                    const optUser = {
                        signed: true,
                        name: displayName,
                        email: email,
                        message: 'Login Successful'
                    }
                    setUser(optUser);
                    history.replace(from);
                })
                .catch(error => {
                    const optUser = {};
                    optUser.message = error.message;
                    setUser(optUser)
                });
        }
        e.preventDefault();
    }

    // update name
    const updateName = name => {
        const currentUser = firebase.auth().currentUser;
        currentUser.updateProfile({displayName: name})
        .then()
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <section id="login">
            <Container className="py-5 text-center">
                <Row className="align-items-center">
                    <Col md={6}>
                        <h3><b>Sign in with Google</b></h3>
                        <Button variant="primary" className="my-3" onClick={googleSingIn}>Sign In</Button>
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={subForm}>
                            <h3 className="my-4"><b>{newUser ? 'Sign Up' : 'Or Login'}</b></h3>

                            {newUser && <FormControl onBlur={handleBlur} name="name" type="text" placeholder="Your Name" className="my-3 bg-light" required />}

                            <FormControl onBlur={handleBlur} name="email" type="email" placeholder="Your Email" className="my-3 shadow" required />

                            <FormControl onBlur={handleBlur} name="password" type="password" placeholder="Your Password" className="my-3 shadow" required />

                            {newUser && <FormControl onBlur={handleBlur} type="password" name="confirm" placeholder="Confirm Password" className="my-3 bg-light" required />}

                            <Button variant="success" type="submit">{newUser ? 'Sign Up' : 'Login'}</Button>
                        </Form>
                        <span className="text-primary mt-4 d-block" style={{cursor: 'pointer'}} onClick={()=>{
                            setNewUser(!newUser);
                            setUser({
                                signed: false,
                                name: '',
                                email: '',
                                password: '',
                                message: ''
                            });
                        }}><b>{newUser ? 'I have an account' : 'I am new here'}</b></span>
                </Col>
            </Row>
            <h6 className="text-danger text-center mt-4">{user.message}</h6>
        </Container>
        </section>
    );
};

export default Login;