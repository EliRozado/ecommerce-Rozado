import './CartWidget.css'
import IconButton from '@mui/material/IconButton'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import {Link} from 'react-router-dom';

const CartWidget = () => {
    return (
        <IconButton color="primary" aria-label="view cart" className="cart-button">
            <Link to="/cart"> 
                <ShoppingCartRoundedIcon fontSize="large"/>
            </Link>
        </IconButton>
    )
}

export default CartWidget;