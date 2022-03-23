import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order'
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
