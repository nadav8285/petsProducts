import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { OrderIdProvider } from "../SearchField"
import Bed1 from '../Pictures/WoodStands/firstStand.jpg'
import Bed2 from '../Pictures/WoodenBeds/firstBed.jpg'
import './ordersearch.css'

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

        <>
            {products.length === 0 ? "bla" :
                <div>
                    <div className="searchRsltContainer">
                        <div className="searchImage search-item"></div>
                        <div style={{ fontWeight: 'bold' }} className="searchName search-item">שם המוצר:</div>
                        <div style={{ fontWeight: 'bold' }} className="searchSize search-item">מידות:</div>
                        <div style={{ fontWeight: 'bold' }} className="searchPrice search-item">מחיר:</div>
                    </div>
                    <div className="topSearchRsltContainer">

                        {products.map((x, y) => {
                            return (
                                <div className="searchRsltContainer">
                                    <div className="searchImage search-item"><img style={{ width: '60%', borderRadius: '10px' }} alt="" src={x.category === 'wooden stand' ? Bed1 : Bed2} /></div>
                                    <div className="searchName search-item">{x.name}</div>
                                    <div className="searchSize search-item">{x.size}</div>
                                    <div className="searchPrice search-item">₪{x.price}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>}

        </>

    )
}