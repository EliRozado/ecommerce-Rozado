import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader';
import productList from '../../data/productList_Mock'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [productData, setProduct] = useState({})

    const getItem = () => {
        return new Promise( (resolve) => {
            setTimeout(()=> {
                resolve(productList)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then( (res) =>{
            const productfilter = res.find( (product) => {
                return product.id == id
            })
            setProduct(productfilter)    
            setLoading(true) 
        })
    }, [id])
    return(
        <div className="detail-cont">
            { loading ? <ItemDetail data={productData}/> : <Loader/>  }
        </div>
    )
}

export default ItemDetailContainer;