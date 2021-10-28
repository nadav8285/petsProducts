import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from ".."
import WoodenBed from '../../Pictures/WoodenBeds/firstBed.jpg'
import WoodenStand from '../../Pictures/WoodStands/firstStand.jpg'
import OrderPayment from "../../OrderPayment"
export default function CartPage() {

    const cartInfo = useContext(CartContext)


    return (

        <>
            <div className='moreupperbox'>
                <div className='upperbox'>
                    <h1 style={{ textAlign: 'center' }}>סל הקניות</h1>
                    <div className="box"  >
                        {cartInfo.cart.length === 0 ? "" : cartInfo.cart.map((x, y) => {
                            const filteredCategory = cartInfo.cart[y].category.split(" ").join("")

                            return (
                                <div className='eachPrdct' style={{ width: '300px', backgroundColor: 'white' }} key={x.name}>
                                    <div className="upperPrdctTitle">
                                        <NavLink activeClassName='active' className="prdctTitle" to={`/${filteredCategory}/${x.name}`}>{x.name}</NavLink>
                                    </div>
                                    <div className="photo">

                                        <img className="image" style={{ width: '300px' }} src={x.category === 'wooden bed' ? WoodenBed : WoodenStand} alt='ok' />
                                    </div>
                                    <div className="lineHight">
                                        <hr className="mainPageHr" />
                                        <p style={{ fontWeight: 'bold' }}>תיאור המוצר: בלה בלה בלה</p>
                                        <i>מחיר: {x.price} ש"ח</i><br />
                                        <i>מידה: {x.size}</i><br />
                                        <i>צבע: {x.color}</i><br />
                                        {/* <i>{x.photo}</i> */}
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
            <OrderPayment />
            {/* <NavLink activeClassName='active' to={`/checkout`}>

                <button>
                    מעבר לתשלום והזמנה
                </button>
            </NavLink> */}
            {/* <OrderPayment /> */}




        </>
    )
}