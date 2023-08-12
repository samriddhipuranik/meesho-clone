import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Cart from './Pages/Cart/Cart';
// import Product from './components/Products/Product';
import Home from './Pages/Home';
import ProductDetails from './components/ProductDetail/ProductDetails';
import Address from './components/Address/Address';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import NavProduct from './components/Products/Nav_product';
import SearchProduct from './components/Products/SearchProduct';

function App() {

 

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart/address" element={<Address />} />
          <Route path="/cart/address/checkout" element={<Checkout />} />
          <Route path='/product/category' element={<NavProduct />} />
          <Route path='/search' element={<SearchProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
