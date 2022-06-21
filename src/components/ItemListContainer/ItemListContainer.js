import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
//import productList from '../../data/productList_Mock'
import Loader from '../Loader/Loader';

import { collection, getDocs, query, where } from 'firebase/firestore'
import database from '../../utils/firebaseConfig'


function ItemListContainer() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [productData, setProducts] = useState([])

    const getProducts = async () => {
        const productSnapshot = await getDocs(collection(database, "productos"))
        //console.log("snapshot", productSnapshot)
        const productList = productSnapshot.docs.map((doc) => {
            //console.log("doc", doc.id, doc.data())
            let product = doc.data()
            product.id = doc.id
            //console.log(product)
            return product
        })
        setProducts(productList)
        //console.log("prodlist", productList)
    }

    const getProductsByCategory = (id) => {
        const q = query(collection(database, "productos"), where("category", "==", id))
        getDocs(q).then((products) => {
            products.size === 0 && console.log("no se encotraron resultados")
            setProducts(products.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        })
    }

    useEffect(() => {
        setLoading(false)
        setProducts([])

        id ? getProductsByCategory(id) : getProducts()
        setLoading(true)
        //console.log(productData)
    }, [id])

    return (
        <div className="ItemListContainer">
            { loading ? <ItemList products={productData}/> : <Loader/> }
        </div>
    );
}

export default ItemListContainer;