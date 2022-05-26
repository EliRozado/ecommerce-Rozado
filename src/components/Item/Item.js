import Card from '@mui/material/Card';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({id, name, imageURL, price, stock}) =>{
    return(
        <Card variant="outlined" className="product" sx={{maxWidth: 280}} id={id}>
            <img src={`./${imageURL}`}/>
            <p>{name}</p>
            <p>{price} ARS</p>
            <ItemCount stock={stock}/>
        </Card>
    )
}

export default Item;