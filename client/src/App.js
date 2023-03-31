import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import "./styles/app.scss"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
