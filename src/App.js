import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './components/Pages/About'
import Cart from './components/Pages/Cart'
import NotFound from './components/Pages/NotFound'

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
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
