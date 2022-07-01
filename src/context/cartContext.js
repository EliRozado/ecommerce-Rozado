import { createContext, useEffect, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const localCart = JSON.parse(localStorage.getItem('cart'))

    const [cartList, setCartList] = useState( localCart || [] );
    const [totalPrice, setTotalPrice] = useState( localCart.reduce((accum, item) => accum + (item.quantity * item.product.price), 0) || 0);
    const [productsInCart, setProductsInCart] = useState( localCart.reduce((accum, item) => accum + item.quantity, 0) || 0 );

    const addToCart = (product, quantity) => {
        isInCart(product) ? updateQty(product, quantity) : setCartList([...cartList, {product, quantity}])
        setTotalPrice(totalPrice + product.price*quantity)
        setProductsInCart(productsInCart + quantity)
    }

    const removeFromCart = (product) => {
        let indexProduct = getProductIndex(product)
        
        if(indexProduct >= 0){
            setTotalPrice(totalPrice - product.price*cartList[indexProduct].quantity) 
            setProductsInCart(productsInCart - cartList[indexProduct].quantity)
            cartList.splice(indexProduct, 1)
        }
        
    }

    const clear = () => {
        setCartList([])
        setTotalPrice(0)
        setProductsInCart(0)
    }

    const isInCart = (product) => {
        return(cartList.find((productInCart, quantity) => productInCart.product.id == product.id))
    }

    const getProductIndex = (product) => {
        return(cartList.findIndex(productInCart => productInCart.product.id == product.id))
    }

    const updateQty = (product, quantity) => {
        cartList[getProductIndex(product)].quantity += quantity
        setCartList([...cartList])
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList))
    },[cartList])

    const data = {
        cartList,
        totalPrice,
        productsInCart,
        addToCart,
        removeFromCart,
        clear
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 
export { CartProvider }