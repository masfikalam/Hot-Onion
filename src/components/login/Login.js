import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import firebaseConfig from './FireConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
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
        setUser(optUser)
    }
    
    const subForm = (e) => {
        if (newUser){
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

    console.log(user)

    return (
        <Container id="login" className="py-5 text-center">
            <Row className="align-items-center">
                <Col md={6}>
                    <h3>Sign in with Google</h3>
                    <Button variant="success" className="my-3" onClick={googleSingIn}>Sing In</Button>
                </Col>
                <Col md={6}>
                    <Form onSubmit={subForm}>
                        <h3 className="my-4">{newUser ? 'Sign Up' : 'Or Login'}</h3>

                        {newUser && <FormControl onBlur={handleBlur} name="name" type="text" placeholder="Your Name" className="my-3 bg-light" required />}

                        <FormControl onBlur={handleBlur} name="email" type="email" placeholder="Your Email" className="my-3 bg-light" required />

                        <FormControl onBlur={handleBlur} name="password" type="password" placeholder="Your Password" className="my-3 bg-light" required />

                        {newUser && <FormControl type="password" placeholder="Confirm Password" className="my-3 bg-light" required />}

                        
                        <Button variant="success" type="submit">{newUser ? 'Sign Up' : 'Login'}</Button>
                    </Form>
                    {
                        newUser ? 
                        <span className="text-primary mt-4 d-block" style={{cursor: 'pointer'}} onClick={()=>{
                            setNewUser(false);
                            setUser({
                                signed: false,
                                name: '',
                                email: '',
                                password: '',
                                message: ''
                              });
                        }}>I have an account</span> :
                        <span className="text-primary mt-4 d-block" style={{cursor: 'pointer'}} onClick={()=>{
                            setNewUser(true);
                            setUser({
                                signed: false,
                                name: '',
                                email: '',
                                password: '',
                                message: ''
                              });
                        }}>I am new here</span>
                    }
                </Col>
            </Row>
            <h6 className="text-danger text-center mt-4">{user.message}</h6>
        </Container>
    );
};

export default Login;