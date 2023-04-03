import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/MyOrders/MyOrders';
import OrderDetails from './components/MyOrders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import "./styles/app.scss"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/order/:id" element={<OrderDetails/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
