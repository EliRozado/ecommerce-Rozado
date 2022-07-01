import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import CartContext from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';

import { Container, Grid } from "@mui/material";
import Button from '../Button/Button';
import './ItemDetail.css';


const ItemDetail = ({data}) => {
    const [quantity, setQuantity] = useState(1);
    const [showButton, setButtonVisibility] = useState(false)
    const { addToCart } = useContext(CartContext)

    
    const onAdd = () => {
        addToCart(data, quantity)
        setButtonVisibility(true)
    }
    
    return(
        <Container className='ItemDetails-cont' fixed>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="detailimg-cont">
                        <img className="detailimg" src={`../${data.imageURL}`}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="ItemDetails">
                        <h2>{data.name}</h2>
                        <p className="description">{data.description}</p>
                        <p className="description">Categoría: {data.category}</p>
                        <p className="description">Licencia: {data.license}</p>
                        <p className="price">{data.price} ARS</p>
                        
                        {showButton ? 
                            <div className="buttons">
                                <Button variant="contained-pink"><Link className="btn-finish" to="/cart">TERMINAR COMPRA</Link></Button>
                                <Button variant="contained-pink"><Link className="btn-finish" to="/cart">VOLVER AL INICIO</Link></Button>
                            </div>
                            :
                            <ItemCount 
                                stock={data.stock} 
                                quantity={quantity} 
                                setQuantity={setQuantity}
                                onAdd={onAdd}/>
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ItemDetail;
