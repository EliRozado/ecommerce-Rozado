import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import productList from '../../data/productList_Mock'
import Loader from '../Loader/Loader';


function ItemListContainer() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [productData, setProducts] = useState([])

    const getItem = () => {
        return new Promise( (resolve) => {
            setTimeout(()=> {
                resolve(productList)
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(false)
        setProducts([])

        const filterByCategory = (array) => {
            return array.map( (item) => {
                if(item.category == id) {
                    return setProducts(productData => [ ...productData,item ])
                }
            })
        }

        getItem()
        .then( (res) =>{
            if(id){
                filterByCategory(res)
                setLoading(true)
            }else{ 
                getItem()
                .then( (res) =>{
                    setProducts(res)  
                    setLoading(true)    
            }) 
        }
    })
    }, [id])

    return (
        <div className="ItemListContainer">
            { loading ? <ItemList products={productData}/> : <Loader/> }
        </div>
    );
}

export default ItemListContainer;