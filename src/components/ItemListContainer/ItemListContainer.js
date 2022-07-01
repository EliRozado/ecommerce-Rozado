import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader';

import { collection, getDocs, query, where } from 'firebase/firestore'
import database from '../../utils/firebaseConfig'


function ItemListContainer() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [productData, setProducts] = useState([])

    const getProducts = async () => {
        const productSnapshot = await getDocs(collection(database, "productos"))
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        setProducts(productList)
        setLoading(true)
    }

    const getProductsByCategory = (id) => {
        const q = query(collection(database, "productos"), where("category", "==", id))
        getDocs(q).then((products) => {
            products.size === 0 && console.log("no se encotraron resultados")
            setProducts(products.docs.map((doc) => ({id: doc.id, ...doc.data() })))
            setLoading(true)
        })
        
    }

    useEffect(() => {
        setLoading(false)
        setProducts([])

        id ? getProductsByCategory(id) : getProducts()
    }, [id])

    return (
        <div className="ItemListContainer">
            { loading ? 
            <> 
                { id && <h2>Resultados para {id}</h2> }
                <ItemList products={productData}/>
            </> : <Loader/> }
        </div>
    );
}

export default ItemListContainer;