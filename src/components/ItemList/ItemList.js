import Item from '../Item/Item';
import { Container, Grid } from '@mui/material'
import './ItemList.css';

const ItemList = ({products}) => {
    return(
        <Container fixed>
            <Grid container justifyContent="center" spacing={2}>
                {products.map(product => 
                    <Grid item key={product.id}>
                        <Item {...product}/>
                    </Grid>)
                }
            </Grid>
        </Container>
    )
}

export default ItemList;