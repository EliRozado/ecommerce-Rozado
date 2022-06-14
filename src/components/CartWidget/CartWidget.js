import { useContext, useEffect, useState } from 'react';
import './CartWidget.css'
import IconButton from '@mui/material/IconButton'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import {Link} from 'react-router-dom';

import CartContext from '../../context/cartContext';

const CartWidget = () => {
    const { productsInCart } = useContext(CartContext)

    return (
        <>
            { productsInCart == 0 ? 
            " " :
            <Link to="/cart">
                <IconButton color="primary" aria-label="view cart" className="cart-button">
                    {productsInCart ? <p>{productsInCart}</p> : " "}
                    <ShoppingCartRoundedIcon fontSize="large"/>
                </IconButton>
            </Link>
            }
        </>
    )
}

export default CartWidget;