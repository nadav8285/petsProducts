import { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext()

export default function Cart({ children }) {

    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : []

    })
    const value = { cart, setCart };
    useEffect(() => {
        async function getDataFromLocalStorage() {
            try {

                localStorage.setItem('cart', JSON.stringify(cart))
            } catch (e) {
                console.log("error")
            }
        }
        getDataFromLocalStorage()
    }, [cart])

    return (
        <>

            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>
    )
}