import './NavBar.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
        <>
            <nav className="navbar">
                <h1 className="brand"><Link className="brand" to={'/'}>ecommerce</Link></h1>
                <ul className="nav-menu">
                    <li> <a className="nav-link" href="#">About</a> </li>
                    <li> <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="nav-link"
                        >
                            Products ⮟
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
                            <MenuItem onClick={handleClose}><Link className="link-menu" to={'/category/figura'}>Figuras</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link className="link-menu" to={'/category/llavero'}>Llaveros</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link className="link-menu" to={'/category/peluche'}>Peluches</Link></MenuItem>
                        </Menu></li>
                    <li> <a className="nav-link" href="#">Contact</a> </li>
                </ul>
                <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar;