import { Container, Grid, Button } from "@mui/material";
import './Cart.css';

import CartContext from '../../context/cartContext';
import { useContext } from 'react';

const Cart = () => {
    const { removeFromCart, clear } = useContext(CartContext)
    return(
        <>
            <Container fixed>
                <h1>Your Cart</h1>
                <Grid className="CartProducts" container spacing={2}>
                    <Grid item xs={3}>
                        <img className="cart-product-img" src="./figure-blaziken.jpg"/>
                    </Grid>
                    <Grid item xs={9}>
                        <p className="cart-product-name">Product name</p>
                        <p>Quantity: 1</p>
                        <p>Remove</p>
                    </Grid>
                </Grid>
                <hr/>
                <Button variant="text" onClick={clear}>Clear Cart</Button>
                    
            </Container>
        </>
    )
}

export default Cart