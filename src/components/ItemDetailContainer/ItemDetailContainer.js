import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader';
import productList from '../../data/productList_Mock'

import { doc, getDoc, query, where } from 'firebase/firestore'
import database from '../../utils/firebaseConfig'


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
        <div className="detail-cont">
            { loading ? <ItemDetail data={productData}/> : <Loader/>  }
        </div>
    )
}

export default ItemDetailContainer;