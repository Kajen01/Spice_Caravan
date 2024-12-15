import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
