import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Pages/Cart'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <header className="header">
            <NavBar/>
          </header>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
