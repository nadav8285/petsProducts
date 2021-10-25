import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsList = createContext()

export default function ProductsData({ children }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function showWoodenBeds() {
            const res = await axios.get(`http://localhost:5000/readproduct`)
            setProducts(res.data)
        }
        showWoodenBeds()
    }, [])

    return (
        <>
            <ProductsList.Provider value={{ products: products }}>
                {children}
            </ProductsList.Provider>
        </>
    )

}