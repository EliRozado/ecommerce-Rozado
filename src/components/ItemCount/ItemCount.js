import Button from "@mui/material/Button";
import './ItemCount.css'

const ItemCount = (props) => {
    return ( 
        <div className="ItemCount-Container">
            <div className="ItemCount">
                <Button variant="outlined" size="small" onClick={props.subtQty} disabled={props.quantity == 1}>-</Button>
                    <p className="Number">{props.quantity}</p>
                <Button variant="outlined" size="small" onClick={props.addQty} disabled={props.quantity == props.stock}>+</Button>
            </div>
            <Button className="addToCart" variant="outlined" onClick={props.onAdd}>Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;