import { useContext } from "react";
import { CartContext } from "..";

export default function DeleteProduct({ props }) {

    const cartContext = useContext(CartContext)

    function handleDeleteProdctBtn() {
        const cartCopy = [...cartContext.cart]
        for (let i = 0; i < cartCopy.length; i++) {
            if (cartCopy[i].name === props.x.name) {
                cartCopy.splice(i, 1)
                cartContext.setCart(cartCopy)
                props.setTotalPrice(prevTotalPrice => prevTotalPrice - (Number(props.x.price)))
                break
            }
        }

        // cartContext.setCart(filteredName)
        // props.props(5)
        // setTotalPrice(prevTotalPrice => prevTotalPrice - (Number(x.price) * cartPriceUpdate))
        // console.log(filteredName)
    }

    return (
        <>
            <button style={{ border: 'none', cursor: 'pointer' }} onClick={handleDeleteProdctBtn} >X</button>


        </>
    )
}