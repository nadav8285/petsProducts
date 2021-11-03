import { NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CartContext } from ".."
import WoodenBed from '../../Pictures/WoodenBeds/firstBed.jpg'
import WoodenStand from '../../Pictures/WoodStands/firstStand.jpg'
import './cartpage.css'
import DeleteProduct from "../DeleteProduct"
export default function CartPage() {

    const cartInfo = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)



    useEffect(() => {
        function totalPriceCalc() {
            cartInfo.cart.map((x) => {
                setTotalPrice(prevTotalPrice => prevTotalPrice + Number(x.price))
            })
        }
        totalPriceCalc()
    }, [])


    return (

        <>
            <h1>total price: {totalPrice}</h1>
            <h1 style={{ textAlign: 'center', color: '#415894' }}>סל הקניות</h1>

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
                    <div className='cartItem cartAmount'>
                        <h3>כמות</h3>
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
                            <div className='cartItem'><h4>{x.size}
                            </h4></div>
                            <div className='cartItem'><h4>{x.color}
                            </h4></div>
                            <div className='cartItem'><h4>{x.price}
                            </h4></div>
                            <div className='cartItem'><h4>a
                            </h4></div>


                        </div>

                    )
                })}

            </div>





        </>
    )
}