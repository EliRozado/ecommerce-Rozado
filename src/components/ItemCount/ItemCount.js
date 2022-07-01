import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = ({quantity, setQuantity, stock, onAdd}) => {
    const addQty = () => {
        setQuantity(quantity + 1)
    }

    const subtQty = () => {
        setQuantity(quantity - 1)
    }

    return ( 
        <div className="ItemCount-Container">
            <div className="ItemCount">
                <Button variant="outlined-pink" f={subtQty} disable={quantity == 1}>-</Button>
                    <p className="Number">{quantity}</p>
                <Button variant="outlined-pink" f={addQty} disable={quantity == stock}>+</Button>
            </div>
            <Button className="addToCart" variant="outlined-pink" f={onAdd}>AGREGAR AL CARRITO</Button>
        </div>
    )
}

export default ItemCount;