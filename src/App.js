import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const productList = [
    { id: 1,
      name: "Peluche Azurill",
      imageURL: "Azumarill.jpg",
      price: 1500,
      stock: 15
    },
    { id: 2,
      name: "Peluche Bulbasaur",
      imageURL: "Bulbasaur.jpg",
      price: 1500,
      stock: 10
    },
    { id: 3,
      name: "Peluche Pikachu",
      imageURL: "Pikachu.jpg",
      price: 1600,
      stock: 20
    }
  ]

  const getProducts = () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve(productList)
      }, 2000)
    })
  }

  getProducts()
  .then( (response) => {
    console.log(response);
  })
  .catch( (err) => { 
    console.log("Call failed")
  })



  return (
    <>
      <header className="header">
        <NavBar/>
      </header>
      <ItemListContainer greeting="Bienvenido a ecommerce" products={productList}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
