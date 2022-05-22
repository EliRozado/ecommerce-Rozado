import {useState} from 'react';
import Button from "@mui/material/Button";
import './ItemCount.css'

const ItemCount = (props) => {
    const [count, setCount] = useState(0);
    
    const addProduct = () => {
        setCount(count + 1)
    }

    const subtProduct = () => {
        setCount(count - 1)
    }

    return ( 
        <div className="ItemCount-Container">
            <div className="ItemCount">
                <Button variant="outlined" size="small" onClick={subtProduct} disabled={count < 1}>-</Button>
                    <p className="Number">{count}</p>
                <Button variant="outlined" size="small" onClick={addProduct} disabled={count == props.stock}>+</Button>
            </div>
            <Button className="addToCart" variant="outlined">Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;