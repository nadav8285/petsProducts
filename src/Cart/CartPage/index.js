import { NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CartContext } from ".."
import WoodenBed from '../../Pictures/WoodenBeds/firstBed.jpg'
import WoodenStand from '../../Pictures/WoodStands/firstStand.jpg'
import './cartpage.css'
import DeleteProduct from "../DeleteProduct"
import DeliveryOrTakeaway from "../DeliveryOrTakeaway"
import OrderPayment from "../../OrderPayment"
export default function CartPage() {

    const cartInfo = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const [checkoutBtn, setCheckoutBtn] = useState(false)

    useEffect(() => {

        function deliveryOrTakeway() {
            if (delivery) setTotalPrice(prevTotalPrice => prevTotalPrice + 50)
            if (!delivery) setTotalPrice(prevTotalPrice => prevTotalPrice - 50)
        }
        deliveryOrTakeway()
    }, [delivery])
    useEffect(() => {
        function totalPriceCalc() {
            let totalPriceCopy = totalPrice
            cartInfo.cart.map((x) => (
                totalPriceCopy = totalPriceCopy + Number(x.price)
            ))
            setTotalPrice(totalPriceCopy + delivery)
        }
        totalPriceCalc()
    }, [])

    function handleCheckoutBtn() {
        setCheckoutBtn(true)
    }
    return (

        <>
            <h1 style={{ textAlign: 'center', color: '#415894' }}>סל הקניות</h1>
            <div style={{ display: 'flex', direction: 'rtl' }}>

                <div style={{ width: '80%' }}>
                    <div className='upperCartContainer'>
                        <div className='cartContainer' >
                            <span style={{ padding: '1px 10px' }} />
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
                        {cartInfo.cart.length === 0 ? "" : cartInfo.cart.map((x, y) => {
                            const filteredCategory = cartInfo.cart[y].category.split(" ").join("")
                            return (
                                <div className='cartContainer'>
                                    <DeleteProduct props={{ x, setTotalPrice }} />
                                    <div className='cartItem'>
                                        <img src={x.category === 'wooden bed' ? WoodenBed : WoodenStand} alt="" className='cartImage' />
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
                    <div >
                        <h3>סיכום עגלה</h3>
                    </div>
                    <div style={{ border: 'solid', color: '#415894', fontSize: '17px', fontWeight: 'bold' }}>
                        <div >
                            <h4 style={{ marginRight: '25px' }}>סה"כ מוצרים: {cartInfo.cart.length}</h4>
                        </div>
                        <div>
                            <DeliveryOrTakeaway delivery={{ setDelivery }} />

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                            <i style={{ marginRight: '25px', marginBottom: '15px', fontWeight: 'bold' }}>סה"כ לתשלום: ₪{totalPrice}</i>
                            <div style={{ textAlign: 'center', marginBottom: '5px' }}>
                                <button disabled={totalPrice ? false : true} style={{ border: 'solid', borderWidth: '1px', backgroundColor: '#f2a128', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleCheckoutBtn}>מעבר לתשלום</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {checkoutBtn ? <OrderPayment priceAfterAll={totalPrice} delivery={Boolean(delivery)} /> : ""}

        </>
    )
}