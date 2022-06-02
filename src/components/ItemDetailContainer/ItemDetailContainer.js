import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import productList from '../../data/productList_Mock'

const ItemDetailContainer = () => {
    const { id } = useParams()
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
        })
    }, [id])
    
    console.log('Respuesta:', productData)
    return(
        <div>
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer;