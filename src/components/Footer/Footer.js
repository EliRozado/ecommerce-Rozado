import { Container, Grid, TextField, IconButton, Modal, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button/Button';
import './Footer.css';

import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore'
import database from '../../utils/firebaseConfig'

const Footer = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
    };

    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formValue, setFormValue] = useState({email: ''})
    
    const saveData = async (newEmail) => {
        const boletinFirebase = collection(database, 'boletin-email')
        const emailDoc = await addDoc(boletinFirebase, newEmail)
        setFormValue({email: ''})
        setSuccess(true)
        open()
    }

    const open = () => {setShowModal(true)}
    const close= () => {setShowModal(false)}

    const handleChange = (e) => {
        setFormValue({...formValue, email : e.target.value})
        console.log(formValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveData(formValue)
    }

    return (
        <div className='Footer-container'>
            <Container fixed>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <div className='footer-flex'>
                            <h3>Contacto</h3>
                            <p>Siempre puedes mandarnos preguntas directamente a nuestro mail: <em>consultas@mimishop.com</em></p>
                        </div>
                    </Grid>
                    <Grid item xs={6} >
                        <div className='footer-flex'>
                            <h3>Boletin</h3>
                            <p>Suscribete a nuestro boletin para saber de futuros restock, ofertas y nuevos productos.</p>
                            <form className="footer-form" onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <TextField
                                            size="small"
                                            variant="outlined"
                                            required
                                            id="standard-required"
                                            name="email"
                                            label="Email"
                                            onChange={handleChange}
                                            value={formValue.email}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained-brown" type="submit">ENVIAR</Button>
                                    </Grid>
                                </Grid>
                            </form>
                            
                            {success &&
                                <Modal
                                open={showModal}
                                onClose={close}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >   
                                    <Box sx={style} className='footer-success'>
                                        <IconButton aria-label="close" onClick={close}>
                                            <CloseIcon />
                                        </IconButton>
                                        <p>Has sido agregado a nuestra lista con exito!</p>
                                    </Box>
                                </Modal> }
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="credit">© MimiShop 2022</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer