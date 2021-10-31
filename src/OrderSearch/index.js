import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { OrderIdProvider } from "../SearchField"
import Bed1 from '../Pictures/WoodStands/firstStand.jpg'
import Bed2 from '../Pictures/WoodenBeds/firstBed.jpg'

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
                console.log(e);
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
                        Not Exist Order!</h3></div></> : products.map((x, y) => {
                            return (

                                <div className="searchRsltContainer" key={y}>
                                    <div className="searchImage search-item"><img style={{ width: '200px' }} src={x.category === 'wooden stand' ? Bed1 : Bed2} /></div>
                                    <div className="searchImage search-item">{x.name}</div>
                                    <div className="searchImage search-item">{x.size}</div>
                                    <div className="searchImage search-item">{products.length}</div>
                                    <div className="searchImage search-item">{x.price}</div>
                                </div>
                            )
                        })

            }
        </div>

    )
}