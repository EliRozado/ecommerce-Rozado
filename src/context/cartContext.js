import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productsInCart, setProductsInCart] = useState(0);

    const addToCart = (product, quantity) => {
        isInCart(product) ? updateQty(product, quantity) : setCartList([...cartList, {product, quantity}])
        setTotalPrice(totalPrice + product.price*quantity)
        setProductsInCart(productsInCart + quantity)
        console.log(cartList, totalPrice, productsInCart)
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
        //setTotalPrice(totalPrice + product.price*quantity)
    }

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