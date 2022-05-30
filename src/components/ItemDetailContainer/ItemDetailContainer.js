import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {product} from '../../data/productList_Mock'

const ItemDetailContainer = () => {
    const [productData, setProduct] = useState({})
    const getItem = () => {
        return new Promise( (resolve) => {
            setTimeout(()=> {
                resolve(product)
            }, 2000)
        })
    }
    
    useEffect(() => {
        getItem()
        .then( (res) =>{
            
            setProduct(res)
        })
    })
    console.log('Respuesta:', productData)
    return(
        <div>
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer;