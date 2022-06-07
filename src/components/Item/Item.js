import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './Item.css';

const Item = ({id, name, imageURL, price, stock}) =>{
    return(
        <Card variant="outlined" className="product" sx={{maxWidth: 280}} id={id}>
            <img src={`../${imageURL}`}/>
            <p>{name}</p>
            <p>{price} ARS</p>
            <Link className="detail-btn" to={`/item/${id}`}>
                <Button variant={'outlined'}>Ver Detalles</Button>
            </Link>
        </Card>
    )
}

export default Item;