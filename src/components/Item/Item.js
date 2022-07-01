import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Item.css';

const Item = ({id, name, imageURL, price}) =>{
    return(
        <Card variant="outlined" className="product" sx={{maxWidth: 170, borderColor: '#fcbad2', height: 300, borderRadius: 4}} id={id}>
            <div className="img-cont"><img src={`../${imageURL}`}/></div>
            <p>{name}</p>
            <p>{price} ARS</p>
            <Link className="detail-btn" to={`/item/${id}`}>
                <Button variant='outlined-pink' text="VER DETALLES"/>
            </Link>
        </Card>
    )
}

export default Item;