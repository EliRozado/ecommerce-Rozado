import { Container, Button } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import './Cart.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import CartContext from '../../context/cartContext';
import { useContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore'
import database from '../../utils/firebaseConfig'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
    const { cartList, totalPrice, removeFromCart, clear } = useContext(CartContext)
    const [ showModal, setShowModal ] = useState(false)
    const [ success, setSuccess ] = useState()
    const [ formValue, setFormValue ] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [ order, setOrder ] = useState({
        buyer: { },
        items: cartList.map( item => {
            return(
                {id: item.product.id,
                title: item.product.name,
                price: item.product.price,
                quantity: item.quantity}
            )
        }),
        date: new Date(),
        total: totalPrice
    }) 
    const handleOpen = () => {setShowModal(true)}
    const handleClose= () => {setShowModal(false)}

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
        console.log(formValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue, total: totalPrice})     
        saveData({...order, buyer: formValue, total: totalPrice})
        //console.log(orderDoc)  
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(database, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
    }

    const handleClick = () => {
        clear()
        setSuccess()
    }

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
                    <Button variant="outlined" onClick={handleOpen}>Terminar Compra</Button>
                    <Button variant="outlined" onClick={clear}>Clear Cart</Button>
                    
                </>        
                
                :
                <>
                    <h2>El Carrito se encuentra vacio</h2>
                    <Link to='/'> Volver al inicio</Link>
                </>
                }  
                <Modal open={showModal} handleClose={handleClose}>
                    <Box className="form" sx={style}>
                        { success ? 
                        <div className="success">
                            <CheckCircleIcon color="success" sx={{ fontSize: 100 }}/>
                            <p>Compra exitosa</p>
                            <p>el id de su compra es {success}</p>
                            <Link to='/' onClick={handleClick} className="inicio"> Volver al inicio</Link>
                        </div>
                            :
                            <>
                                <h2>Formulario de Contacto</h2>
                                <p>Este es el paso final para completar su compra!</p>
                                <form className="form" onSubmit={handleSubmit}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        name="name"
                                        label="Nombre y Apellido"
                                        value={formValue.name}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                    <TextField
                                    required
                                    id="outlined-required"
                                    name="phone"
                                    label="Telefono"
                                    value={formValue.phone}
                                    onChange={handleChange}
                                    fullWidth
                                    />
                                    <TextField
                                    required
                                    id="outlined-required"
                                    name="email"
                                    label="Email"
                                    value={formValue.email}
                                    onChange={handleChange}
                                    fullWidth
                                    />
                                    <button className="formButton" type="submit">Enviar</button>
                                </form>
                            </>}
                    </Box>
                </Modal>  

        </Container>
    )
}

export default Cart