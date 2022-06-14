import Button from "@mui/material/Button";
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
                <Button variant="outlined" size="small" onClick={subtQty} disabled={quantity == 1}>-</Button>
                    <p className="Number">{quantity}</p>
                <Button variant="outlined" size="small" onClick={addQty} disabled={quantity == stock}>+</Button>
            </div>
            <Button className="addToCart" variant="outlined" onClick={onAdd}>Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;