import { useContext, useState } from "react"
import { CartContext } from ".."
import './cartQuantity.css'
export default function CartQuantityBtn({ props }) {

    const cart = useContext(CartContext)
    const cartNameObj = {}
    const [productName, setProductName] = useState(() => cart.cart.map((prdctName) => { return prdctName.name }))
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

    findDuplicates(productName).forEach(function (x) { cartNameObj[x] = (cartNameObj[x] || 0) + 1; });

    function handleRemoveProduct(e) {
        const cartCopy = [...cart.cart]
        console.log(props)
        // cart.cart.find(b => b.name === e.target.value)

    }

    return (<>
        < div className="cartQuantity">

            <button className="quantity-item btnQuantity">+</button>
            <input type="text" className="quantity-item quantity2" value={cartNameObj[props.name] === undefined ? 1 : cartNameObj[props.name] + 1} />
            <button onClick={handleRemoveProduct} className="quantity-item btnQuantity">-</button>


        </div>

    </>)
}