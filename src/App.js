import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Foods from './components/foods/Foods';
import Dish from './components/dish/Dish';
import Checkout from './components/checkout/Checkout';
import PrivateRoute from './components/login/PrivateRoute';
import Login from './components/login/Login';
import Thanks from './components/thanks/Thanks';
import Cart from './components/cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './Firebase/Firebase';
import './App.css';
import Admin from './components/admin/Admin';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [foods, setFoods] = useState([]);

  // fetching all items
  useEffect(() => {
    db.collection('items')
    .onSnapshot(snapshot => {
      const itemsArray = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      setFoods(itemsArray.reverse());
  })}, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <TopNav />
        <Switch>
          <Route path="/" exact>
            <Header /><Foods foods={foods} /><Footer />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/:id" component={Dish} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;