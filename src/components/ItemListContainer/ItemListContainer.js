import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(props) {
    return (
        <div className="ItemListContainer">
            <h2>{props.greeting}</h2>
            <ItemCount stock="15"/>
        </div>
    );
}

export default ItemListContainer;