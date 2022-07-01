import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


import ItemDetail from '../ItemDetail/ItemDetail'
import { Container } from '@mui/material'
import Loader from '../Loader/Loader';

import { doc, getDoc } from 'firebase/firestore'
import database from '../../utils/firebaseConfig'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [productData, setProduct] = useState({})


    const getProduct = (id) => {
        const productRef = doc(database, "productos", id)
        getDoc(productRef).then((product) => {
            product.exists() && setProduct({id: product.id, ...product.data() })
            setLoading(true)
        })
    }

    useEffect(() => {
        setLoading(false)
        getProduct(id)
    }, [id])
    
    return(
        <Container fixed className="detail-cont">
            <div className="detail-cont-link-top">
                <ChevronRightIcon fontSize="small"/> <Link to={'/'}>Volver al inicio</Link>
            </div>
            { loading ? <ItemDetail data={productData}/> : <Loader/>  }
        </Container>
    )
}

export default ItemDetailContainer;