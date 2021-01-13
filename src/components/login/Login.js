import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import firebaseConfig from './FireConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'

firebase.initializeApp(firebaseConfig);

const Login = () => {
    document.title = 'Red Onion - Login';
    const [user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from:{pathname:"/"}};
    
    const subForm = (e) => {
        e.preventDefault();
        const loginForm = document.getElementById('loginForm');
        
        if (newUser) {
            if (loginForm.password.value === loginForm.confirm.value) {
                const data = {
                    name: loginForm.name.value,
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                
                // email sign in
                firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(() => {
                    const optUser = {
                        signed: true,
                        name: data.name,
                        email: data.email,
                        message: 'Login Successful'
                    }
                    setUser(optUser);
                    updateName(data.name)
                    history.replace(from);
                })
                .catch(error => {
                    const optUser = {};
                    optUser.message = error.message;
                    setUser(optUser)
                });
            } else {
                setUser({ message: "Password didn't match"})
            }            
        } else {
            const data = {
                email: loginForm.email.value,
                password: loginForm.password.value,
            }
            // email login
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(result => {
                const { displayName, email}  = result.user;
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
                const optUser = { message : error.message };
                setUser(optUser)
            });
        }
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

    // handling user
    const handleUser = () => {
        setNewUser(!newUser);
        setUser({});
    }

    return (
        <section id="login">
            <Container className="py-5 text-center">
                <Form id="loginForm" onSubmit={subForm}>
                    <h3 className="my-4"><b>{newUser ? 'Sign Up' : 'Or Login'}</b></h3>
                    {
                        newUser &&
                        <FormControl name="name" type="text" placeholder="Your Name" className="my-3" required />
                    }
                    <FormControl name="email" type="email" placeholder="Your Email" className="my-3 shadow" required />
                    <FormControl name="password" type="password" placeholder="Your Password" className="my-3 shadow" required />
                    {
                        newUser &&
                        <FormControl type="password" name="confirm" placeholder="Confirm Password" className="my-3" required />
                    }
                    <Button variant="success" type="submit">{ newUser ? 'Sign Up' : 'Login' }</Button>
                </Form>
                <span className="text-primary btn mt-4" onClick={handleUser}>
                    <b>{ newUser ? 'I have an account' : 'I am new here' }</b>
                </span>
                <h6 className="text-danger text-center mt-4">{user.message}</h6>
            </Container>
        </section>
    );
};

export default Login;