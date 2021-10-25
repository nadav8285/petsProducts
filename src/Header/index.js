import { NavLink } from 'react-router-dom'
import './header.css'
import { CartContext } from '../Cart'
import { useContext } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'

export default function Header() {
    const cartInfo = useContext(CartContext)
    const [linksChange, setLinksChange] = useState(false)
    const history = useHistory()

    const HandleSubmit = (e) => {
        e.preventDefault();

        history.push(`/search/${e.target[0].value}`)
        e.target[0].value = ''
    }

    return (
        <>
            <div className="navmenu">
                <div className="rightSide">
                    <div className="links" id={linksChange ? "hidden" : ""}>
                        <NavLink className="nav" to='/home'>בית</NavLink>
                        <NavLink className="nav" to='/woodenbeds'>מיטות לכלבים</NavLink>
                        <NavLink className="nav" to='/woodenstands'>מעמד לקערות</NavLink>
                        <NavLink className="nav" to={''}>אודות</NavLink>
                        <NavLink className="nav" to={''}>צור קשר</NavLink>
                    </div>
                    <button onClick={() => setLinksChange(!linksChange)}>Open</button>
                </div>
                <div className="middleLogo">
                    Logo and Name here
                </div>

                <div className="leftSide" >
                    <form onSubmit={HandleSubmit}>
                        <input type='text' placeholder="מספר הזמנה..." required />
                        <button type="submit" name="orderId">שלח</button>
                    </form>
                </div>
            </div>


            <button className='stickyCart'>
                <span className="fa-stack fa-2x has-badge" data-count={cartInfo.cart.length}>
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
            </button>



        </>
    )
}