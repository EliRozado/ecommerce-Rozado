import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {
    return (
        <div className="ItemListContainer">
            <h2>{props.greeting}</h2>
            <ItemList products={props.products}/>
            <ItemList products={props.products}/>
        </div>
    );
}

export default ItemListContainer;