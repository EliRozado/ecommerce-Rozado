import CartContext from '../../context/cartContext';
import { useContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore'
import database from '../../utils/firebaseConfig'
import { Link } from 'react-router-dom'

import { TextField, Box } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../Button/Button'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #5c4c51',
    borderRadius: 10,
    boxShadow: 24,
    color: '#806a71',
    padding: '15px 30px 40px',
};

const Form = () => {
    const { cartList, totalPrice, clear } = useContext(CartContext)
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

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
        console.log(formValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue, total: totalPrice})     
        saveData({...order, buyer: formValue, total: totalPrice})
        clear()
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(database, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
    }

    const handleClick = () => {
        setSuccess()
    }

    return(
        <>
            <Box className="form" sx={style}>
                { success ? 
                    <div className="success">
                        <CheckCircleIcon sx={{ fontSize: 100, color: 'rgb(138, 211, 138)'}}/>
                        <p><strong>Compra exitosa</strong></p>
                        <p>el id de su compra es {success}</p>
                        <Button variant="contained-brown">
                            <Link to='/' onClick={handleClick} className="inicio"> Volver al inicio</Link>
                        </Button>
                    </div>
                    :
                    <>
                        <h2>Formulario de Contacto</h2>
                        <p>Con estos datos nos pondremos en contacto con usted para finalizar su compra. Esto usualmente toma de 2 a 5 días laborales!</p>
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
                            <Button variant="contained-brown" type="submit">Enviar</Button>
                        </form>
                    </>
                }
            </Box>
        </>
    )
}

export default Form