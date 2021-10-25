import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import './pr.css'
import Bed1 from '../Pictures/WoodStands/firstStand.jpg'
import { ProductsList } from '../ProductsData';
import { CartContext } from '../Cart'

export default function Woodenstands() {
    const dataInfo = useContext(ProductsList)
    const cart = useContext(CartContext)

    // const [products, setProducts] = useState()

    function cartControl(x) {
        cart.setCart([...cart.cart, x])
    }

    const filterIt = dataInfo.products.filter(prdctName => prdctName.category === "wooden stand")

    return (

        <div className='moreupperbox'>
            <div className='upperbox'>
                <div className="box">
                    {filterIt.length === 0 ? "" : filterIt.map((x) => {
                        return (
                            <div className='eachPrdct'>
                                <div className="upperPrdctTitle">
                                    <NavLink activeClassName='active' className="prdctTitle" to={`/woodenstands/${x.name}`}>{x.name}</NavLink>
                                </div>
                                <div className="photo">

                                    <img className="image" style={{ width: '450px' }} src={Bed1} alt='ok' />
                                </div>
                                <div className="lineHight">
                                    <hr className="mainPageHr" />
                                    <p style={{ fontWeight: 'bold' }}>תיאור המוצר: בלה בלה בלה</p>
                                    <i>מחיר: {x.price} ש"ח</i><br />
                                    <i>מידה: {x.size}</i><br />
                                    <i>צבע: {x.color}</i><br />
                                    <i style={{ color: Number(x.inStoke) === 0 ? 'red' : 'green' }}>במלאי: {x.inStoke}</i><br />
                                    <i>{x.photo}</i>
                                </div>

                                {Number(x.inStoke) === 0 ? <div className="notInStock">אזל מהמלאי</div> :
                                    <div className='prdctbtn'>
                                        <button onClick={() => cartControl(x)} className='prdctinfo'>הוסף לעגלה</button>
                                        <NavLink activeClassName='active' to={'checkout'}><button className='prdctbuy'>לתשלום והזמנה</button></NavLink>
                                    </div>}

                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )


}