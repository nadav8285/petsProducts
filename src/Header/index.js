import { NavLink } from 'react-router-dom'
import './header.css'
import { CartContext } from '../Cart'
import { useContext } from 'react'
import { useState } from 'react'
import { OrderIdProvider } from '../SearchField'
import Logo from '../Pictures/logo.png'

export default function Header() {
    const cartInfo = useContext(CartContext)
    const searchValue = useContext(OrderIdProvider)
    const [linksChange, setLinksChange] = useState(false)
    const [inputValue, setInputValue] = useState()
    const [buttonInputReset, setButtonInputReset] = useState("")


    function searchContextControl() {
        setButtonInputReset("")
        searchValue.setParam(inputValue)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        setButtonInputReset(e.target.value)

    }

    return (
        <>
            <div className="navmenu">
                <div className="rightSide">
                    <div className="links" id={linksChange ? "hidden" : ""}>
                        <NavLink className="nav" to='/home'>בית</NavLink>
                        <NavLink className="nav" to='/woodenbed'>מיטות מעץ</NavLink>
                        <NavLink className="nav" to='/woodenstand'>מעמד לקערות</NavLink>
                        <NavLink className="nav" to='/contact'>יצירת קשר</NavLink>
                    </div>
                    <button onClick={() => setLinksChange(!linksChange)}>
                        <div className="menuButton"></div>
                        <div className="menuButton"></div>
                        <div className="menuButton"></div>
                    </button>
                </div>
                <div className="middleLogo" style={{ flexDirection: 'column', color: 'black' }} >
                    <img className='logoPic' src={Logo} alt='s' />

                    <div className='belowLogo' style={{ fontSize: '17px', color: '#282828' }}>
                        <i >ריהוט דקורטיבי בעיצוב מיוחד לכלבים וחתולים</i>
                    </div>
                </div>

                <div className="leftSide" >

                    <input type='text' placeholder="מספר הזמנה..." onChange={handleChange} value={buttonInputReset} required />
                    <NavLink className="searchNav" to="/search">
                        <button onClick={searchContextControl} name="orderId">אישור</button>
                    </NavLink>
                </div>

            </div>

            <NavLink className="nav" to="/cart">
                <button className='stickyCart'>
                    <span className="fa-stack fa-2x has-badge" data-count={cartInfo.cart.length}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                </button>
            </NavLink>

        </>
    )
}