import {useState} from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

import { Button, Menu, MenuItem, Container } from '@mui/material';
import './NavBar.css'

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Container fixed>
            <nav className="navbar">
                <h1 className="brand"><Link className="brand" to={'/'}>MimiShop</Link></h1>
                <ul className="nav-menu">
                <li> <Button variant="text"> <Link className="nav-link" to={'/about'}> Nosotros </Link> </Button> </li>
                    <li> <Button variant="text" id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{color: '#e280a3'}}
                        >
                            Categorias ⮟
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}><Link className="link-menu" to={'/category/Figuras'}>Figuras</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link className="link-menu" to={'/category/Llaveros'}>Llaveros</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link className="link-menu" to={'/category/Peluches'}>Peluches</Link></MenuItem>
                        </Menu></li>
                </ul>
                <CartWidget/>
            </nav>
        </Container>
    )
}

export default NavBar;