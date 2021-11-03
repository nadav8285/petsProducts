import { useContext } from "react"
import { CartContext } from "../Cart"
import { NavLink } from "react-router-dom"

export default function CartPaymentBtns({ props }) {

    const cart = useContext(CartContext)

    function cartControl() {
        cart.setCart([...cart.cart, props])

    }

    return (<>
        <div className='prdctbtn'>
            <button onClick={cartControl} className='prdctinfo'>הוסף לעגלה</button>
            <NavLink activeClassName='active' to='/cart'><button onClick={cartControl} className='prdctbuy'>לתשלום והזמנה</button></NavLink>
        </div>


    </>)
}
