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
import Cart from './components/cart/Cart';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <TopNav />
        <Switch>
          <Route path="/" exact>
            <Header /><Foods /><Features /><Footer />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/thanks">
            <Thanks />
          </PrivateRoute>
          <Route path="/:dish" component={Dish} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;