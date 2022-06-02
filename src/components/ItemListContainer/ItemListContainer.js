import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import productList from '../../data/productList_Mock'


function ItemListContainer() {
    const { id } = useParams()
    const [productData, setProducts] = useState([])

    const getItem = () => {
        return new Promise( (resolve) => {
            setTimeout(()=> {
                resolve(productList)
            }, 2000)
        })
    }

    useEffect(() => {
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
            }else{ 
                getItem()
                .then( (res) =>{
                    setProducts(res)    
                    console.log("I'm adding the whole list!", res, productData)
            }) 
        }
    })
    }, [id])

    return (
        <div className="ItemListContainer">
            <ItemList products={productData}/>
        </div>
    );
}

export default ItemListContainer;