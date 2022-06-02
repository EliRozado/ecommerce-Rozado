import Grid from '@mui/material/Grid'
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({products}) => {
    return(
        <Grid container justifyContent="center" spacing={2}>
            {products.map(product => 
                <Grid item key={product.id}>
                    <Item {...product}/>
                </Grid>)
            }
        </Grid>
    )
}

export default ItemList;