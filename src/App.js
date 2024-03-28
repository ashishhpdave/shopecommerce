import './App.css';
import Navbar from './Commponents/Assets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Commponents/Footer/Footer';
import men_banner from './Commponents/Assets/banner_mens.png'
import women_banner from './Commponents/Assets/banner_women.png'
import kids_banner from './Commponents/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>} />
          <Route path='/kids' element={<ShopCategory  banner={kids_banner} category="kid"/>} />
          <Route path='product' element={<Product />}>
            <Route path=':productID' element={<Product />} />

          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
