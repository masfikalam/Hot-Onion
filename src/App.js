import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/navbar/Navbar';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <TopNav />
    <Header />
    <Menu />
    <Features />
    <Footer />
    </>
  );
}

export default App;
