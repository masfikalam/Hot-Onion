import React, { useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/navbar/Navbar';
import Header from './components/header/Header';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Foods from './components/foods/Foods';
import Dish from './components/dish/Dish';
import Checkout from './components/checkout/Checkout';
import PrivateRoute from './components/login/PrivateRoute';
import Login from './components/login/Login';
import Thanks from './components/thanks/Thanks';
export const CartContext = createContext();
export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <TopNav />
          <Switch>
            <Route path="/" exact>
              <Header />
              <Foods />
              <Features />
              <Footer />
            </Route>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/thanks">
              <Thanks />
            </PrivateRoute>
            <Route path="/:dish">
              <Header />
              <Dish />
            </Route>
            <Route path="*">
              <h1 className="text-center text-danger p-5">Dish Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
