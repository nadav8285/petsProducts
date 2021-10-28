import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { OrderIdProvider } from "../SearchField"

export default function OrderSearch() {

    const OrderId = useContext(OrderIdProvider)
    const [order, setOrder] = useState([])
    const [products, setProducts] = useState([])



    useEffect(() => {
        async function getOrders() {
            try {
                const res = await axios.get(`http://localhost:5000/readorder?orderTrackNum=${OrderId.param}`)
                setOrder(res.data)
            } catch (e) {
                console.log("ok");
                // setError(e.response?.data?.error || e.message)
            }
        }
        getOrders()

    }, [OrderId])

    useEffect(() => {
        async function getOrderProducts() {
            try {
                const res = await axios.post(`http://localhost:5000/readorderproducts`, { ids: order.productIds })
                setProducts(res.data)
            } catch (e) {
                console.log("error")
            }
        }
        getOrderProducts()
    }, [order])






    return (
        <div>
            {products.length === 0 ? <>
                <div>
                    <h3>
                        Not Exist Order!</h3></div></> : products.map((x) => {
                            return (

                                <div key={x.name}>
                                    <h1>
                                        {x.name}
                                    </h1>
                                </div>
                            )
                        })

            }
        </div>

    )
}