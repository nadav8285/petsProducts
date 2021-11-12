import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { OrderIdProvider } from "../SearchField"
import Stand1 from '../Pictures/WoodStands/firstStand.jpg'
import Bed2 from '../Pictures/WoodenBeds/firstBed.jpg'
import { NavLink } from "react-router-dom"
import './ordersearch.css'

const ifActiveOrder = { inprocess: 'ממתין לאישור', inprocessPhoto: 'yellow', active: 'ההזמנה אושרה! המוצר\ים בהכנה...', activePhoto: '#415894', done: 'ההזמנה מוכנה', donePhoto: 'green' }
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
                // OrderId.setParam(res.data)
            } catch (e) {
                console.log("error")
            }
        }
        getOrderProducts()
    }, [order])






    return (

        <>
            {products.length === 0 ? "Not Exist Order" :
                <div>
                    <h1 style={{ textAlign: 'center', color: '#415894' }}>מעקב הזמנה</h1>

                    <div style={{ display: 'flex', direction: 'rtl' }}>

                        <div style={{ width: '80%' }}>
                            <div className='upperCartContainer'>
                                <div className='cartContainer' >
                                    <div className='cartItem'>
                                        <h3> </h3>

                                    </div>
                                    <div className='cartItem cartName'>
                                        <h3>מוצר</h3>
                                    </div>
                                    <div className='cartItem cartSize'>
                                        <h3>מידה</h3>
                                    </div>
                                    <div className='cartItem cartColor'>
                                        <h3>צבע</h3>
                                    </div>
                                    <div className='cartItem cartPrice'>
                                        <h3>מחיר</h3>
                                    </div>

                                </div>

                                {products.map((x, y) => {
                                    const filteredCategory = products[y].category.split(" ").join("")
                                    return (
                                        <div className='cartContainer'>
                                            <div className='cartItem'>
                                                <img src={x.category === 'wooden bed' ? Bed2 : Stand1} alt="" className='cartImage' />
                                            </div>
                                            <div className='cartItem'><h4><NavLink style={{ textDecoration: 'none', color: '#415894' }} activeClassName='active' to={`/${filteredCategory}/${x.name}`} >{x.name}</NavLink>
                                            </h4></div>
                                            <div className='cartItem'><h4 >{x.size}
                                            </h4></div>
                                            <div className='cartItem'><h4>{x.color}
                                            </h4></div>
                                            <div className='cartItem'><h4>{x.price}₪
                                            </h4></div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>

                        <div className='cartItem' style={{ display: 'flex', marginLeft: '15px', flexDirection: 'column' }}>
                            <div>
                                <h3>סטטוס הזמנה</h3>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className='activeStatusColor' style={{ backgroundColor: ifActiveOrder[order.active + 'Photo'], marginLeft: '5px' }} />
                                <div style={{ fontWeight: 'bold' }}>{ifActiveOrder[order.active]}</div></div><br />
                            <br /> <i >קבלת המוצרים ע"פ בחירתך באמצעות-<i style={{ fontWeight: 'bold' }}> {order.delivery ? 'שליח עד הבית' : 'איסוף עצמי'}</i></i>
                            <br />
                            <i>סה"כ {order.paid ? 'שולם' : 'נותר לשלם'}<i style={{ fontWeight: 'bold' }}> ₪{order.totalPrice}</i></i>
                        </div>
                    </div>

                </div>}
        </>

    )
}