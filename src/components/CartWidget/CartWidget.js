import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../context/cartContext';

import IconButton from '@mui/material/IconButton'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './CartWidget.css'

const CartWidget = () => {
    const { productsInCart } = useContext(CartContext)

    return (
        <>
            <Link className="cart-link" to="/cart">
                <IconButton aria-label="view cart" className="cart-button">
                    
                    <ShoppingCartRoundedIcon fontSize="large" sx={{color: '#e280a3'}}/>
                    <p className="items-in-cart"> {productsInCart} </p> 
                </IconButton>
            </Link>
        </>
    )
}

export default CartWidget;