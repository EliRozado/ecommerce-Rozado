import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <NavBar/>
        </header>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
          <Route path='/cart' element={<h1>Cart coming soon</h1>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
