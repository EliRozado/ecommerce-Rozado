import { useState } from 'react';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import './ItemDetail.css';

const ItemDetail = ({data}) => {
    const [quantity, setQuantity] = useState(1);
    const [showButton, setButtonVisibility] = useState(false)

    const addProduct = () => {
        setQuantity(quantity + 1)
    }

    const subtProduct = () => {
        setQuantity(quantity - 1)
    }

    const onAdd = () => {
        //add to cart function
        console.log("Producto: ", data, "Cantidad: ", quantity )
        setButtonVisibility(true)
    }

    return(
        <Container fixed sx={{border: 1, borderRadius: 5, borderColor: 'primary.main', marginTop: 20, marginBottom: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img className="detailimg" src={`../${data.imageURL}`}/>
                </Grid>
                <Grid item xs={6}>
                    <div className="ItemDetails">
                        <h2>{data.name}</h2>
                        <p className="description">{data.description}</p>
                        <p className="description">Categoría: {data.category}</p>
                        <p className="price">{data.price} ARS</p>
                        
                        {!showButton ? 
                            <ItemCount 
                                stock={data.stock} 
                                quantity={quantity} 
                                addQty={addProduct} 
                                subtQty={subtProduct}
                                onAdd={onAdd}/>
                            :
                            <Button variant="outlined"><Link to="/cart">Terminar compra</Link></Button>
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ItemDetail;
