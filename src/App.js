import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <header className="header">
        <NavBar/>
      </header>
      <ItemListContainer greeting="Bienvenido a ecommerce"/>
    </>
  );
}

export default App;
