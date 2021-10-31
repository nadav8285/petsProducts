import { useContext } from "react"
import { CartContext } from "../Cart"
import { NavLink } from "react-router-dom"

export default function CartPaymentBtns({ props }) {

    const cart = useContext(CartContext)

    function cartControl(x) {
        cart.setCart([...cart.cart, x])
    }

    return (<>
        <div className='prdctbtn'>
            <button onClick={() => cartControl(props)} className='prdctinfo'>הוסף לעגלה</button>
            <NavLink activeClassName='active' to='/cart'><button onClick={() => cartControl(props)} className='prdctbuy'>לתשלום והזמנה</button></NavLink>
        </div>


    </>)
}
