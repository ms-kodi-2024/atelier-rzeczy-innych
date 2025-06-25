import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Success from './pages/Success/Success';
import Fail from './pages/Fail/Fail';
import ProductListPage from './pages/ProductList/ProductListPage';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkt/:slug" element={<Product />} />
        <Route path="/koszyk" element={<Cart />} />
        <Route path="/zamowienie" element={<Checkout />} />
        <Route path="/potwierdzenie" element={<Success />} />
        <Route path="/blad-zamowienia" element={<Fail />} />
        <Route path="/produkty" element={<ProductListPage />} />
        <Route path="/kategoria/:slug" element={<ProductListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
