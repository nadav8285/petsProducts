import { useState, createContext } from "react";

export const OrderIdProvider = createContext()

export default function SearchField({ children }) {

    const [param, setParam] = useState([])
    const value = { param, setParam };


    return (
        <>
            <OrderIdProvider.Provider value={value}>
                {children}
            </OrderIdProvider.Provider>

        </>
    )
}





