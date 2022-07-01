import {Link} from 'react-router-dom'
import { Container, Button } from "@mui/material";
import './NotFound.css';

const NotFound = () => {
    return(
        <Container fixed> 
            <div className='error-cont'>
                <h2 className='error-title'>404 PAGE NOT FOUND</h2>
                <p className='error-body'>La página que busca no existe.</p>
                <Button variant="contained" className='error-button'><Link to={'/'}>Volver al inicio</Link></Button>
            </div>
        </Container>
    )

}

export default NotFound