import { useContext, useState } from "react"
import { CartContext } from ".."
import './cartQuantity.css'
export default function CartQuantityBtn({ props }) {

    const cart = useContext(CartContext)
    let strArray = ["q", "w", "w", "w", "e", "i", "u", "r"];
    const cartNameObj = {}
    const [productName, setProductName] = useState(() => cart.cart.map((prdctName) => { return prdctName.name }))
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

    findDuplicates(productName).forEach(function (x) { cartNameObj[x] = (cartNameObj[x] || 0) + 1; });


    return (<>
        <div className="cartQuantity">

            <button className="quantity-item btnQuantity">+</button>
            <input type="text" className="quantity-item quantity2" value={cartNameObj[props.name] === undefined ? 1 : cartNameObj[props.name] + 1} />
            <button className="quantity-item btnQuantity">-</button>


        </div>

    </>)
}