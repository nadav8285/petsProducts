import { createContext, useState } from "react";

export const CartContext = createContext()

export default function Cart({ children }) {

    const [cart, setCart] = useState([])
    const value = { cart, setCart };
    return (
        <>

            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>
    )
}