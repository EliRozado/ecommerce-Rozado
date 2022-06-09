import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([ ]);

    const addToCart = (product, quantity) => {
        //let isInCart = cartList.find((productInCart, quantity) => productInCart.product.id == product.id)
        !isInCart(product) && setCartList([...cartList, {product, quantity}])
        console.log(cartList)
    }

    const removeFromCart = (product) => {
        let indexProduct = cartList.findIndex(productInCart => productInCart.product.id == product.id)
        indexProduct >= 0 && cartList.splice(indexProduct, 1)
    }

    const clear = () => {
        setCartList([])
        console.log(cartList)
    }

    const isInCart = (product) => {
        console.log("Removiendo", product)
        return(cartList.find((productInCart, quantity) => productInCart.product.id == product.id))
    }

    const data = {
        cartList,
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