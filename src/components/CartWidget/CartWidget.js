import './CartWidget.css'
import IconButton from '@mui/material/IconButton'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartWidget = () => {
    return (
        <IconButton color="primary" aria-label="view cart" className="cart-button">
            <ShoppingCartRoundedIcon fontSize="large"/>
        </IconButton>
    )
}

export default CartWidget;