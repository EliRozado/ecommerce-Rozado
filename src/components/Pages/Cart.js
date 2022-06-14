import { Container, Button } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import './Cart.css';

import CartContext from '../../context/cartContext';
import { useContext, useEffect } from 'react';

const Cart = () => {
    const { cartList, totalPrice, removeFromCart, clear } = useContext(CartContext)
    let total = 0

    console.log(cartList.length)
    return(
        <Container fixed> 
            {cartList.length ? 
                <>
                    <h1 className="CartTitle">Carrito</h1>
                    <table className="CartProducts">
                        <tr>
                            <td colSpan={2}>Producto</td>
                            <td>Cantidad</td>
                            <td>Precio Unitario</td>
                            <td></td>
                        </tr>
                        {cartList.map( (item) => {
                            const {product, quantity} = item
                            return(
                                <tr key={product.id}>
                                    <td>
                                        <img className="cart-product-img" src={`../${product.imageURL}`}/>
                                    </td>
                                    <td>
                                        <p className="cart-product-name">{product.name}</p>

                                    </td>
                                    <td>
                                        <p>{quantity}</p>
                                    </td>
                                    <td>
                                        <p>{product.price}</p>
                                    </td>
                                    <td>
                                        <IconButton color="primary" aria-label="remove product" onClick={(e) => removeFromCart(product)}>
                                            <DeleteRoundedIcon />
                                        </IconButton>                           
                                    </td>
                                </tr>
                            )
                        })

                        }
                    </table>
                    <p><strong>Total</strong>: {totalPrice}</p>
                    <Button variant="outlined" onClick={clear}>Clear Cart</Button>
                </>        
                
                :
                <>
                    <h2>El Carrito se encuentra vacio</h2>
                    <Link to='/'> Volver al inicio</Link>
                </>
                }    
        </Container>
    )
}

export default Cart