import { Container, Grid} from "@mui/material";
import './ItemDetail.css';

const ItemDetail = ({data}) => {
    return(
        <Container fixed sx={{border: 1, borderRadius: 5, borderColor: 'primary.main', marginTop: 20, marginBottom: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img className="detailimg" src={`../${data.imageURL}`}/>
                </Grid>
                <Grid item xs={6}>
                    <div className="ItemDetails">
                        <h2>{data.name}</h2>
                        <p className="description">{data.description}</p>
                        <p className="description">Categoría: {data.category}</p>
                        <p className="price">{data.price} ARS</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ItemDetail;
