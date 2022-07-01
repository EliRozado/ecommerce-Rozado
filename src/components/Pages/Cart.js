import CartContext from '../../context/cartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button/Button';
import Form from '../Form/Form'

import { Container, IconButton, Modal } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import './Cart.css';

const Cart = () => {
    const { cartList, totalPrice, removeFromCart, clear } = useContext(CartContext)
    const [ showModal, setShowModal ] = useState(false)

    const handleOpen = () => {setShowModal(true)}
    const handleClose= () => {setShowModal(false)}

    return(
        <Container fixed className="cart-cont"> 
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
                                        <Link className="cart-product-link" to={`/item/${product.id}`}>Ver Producto</Link>
                                    </td>
                                    <td>
                                        <p>{quantity}</p>
                                    </td>
                                    <td>
                                        <p>{product.price} ARS</p>
                                    </td>
                                    <td>
                                        <IconButton sx={{color: '#ba5d5d'}} aria-label="remove product" onClick={(e) => removeFromCart(product)}>
                                            <DeleteRoundedIcon />
                                        </IconButton>                           
                                    </td>
                                </tr>
                            )
                        })

                        }
                    </table>
                    <div className="cart-bot">
                        <Button variant="outlined-pink" text="LIMPIAR CARRITO" f={clear}/>
                        <p><strong>Total</strong>: {totalPrice} ARS</p>                       
                    </div>
                    
                    <div className="finish-line">
                        <p><em>El precio final no refleja el precio del envio.</em></p>  
                        <Button variant="contained-pink" text="TERMINAR COMPRA" f={handleOpen}/>
                    </div>
                    
                </>        
                
                :
                <>
                    <div className="empty-cart-cont">
                        <h2>El Carrito se encuentra vacio</h2>
                        <Button variant="contained-brown"> <Link to='/'> Volver al inicio</Link> </Button>
                    </div>
                </>
                }  
                <Modal open={showModal} onClose={handleClose}>
                    <Form/>
                </Modal>  

        </Container>
    )
}

export default Cart