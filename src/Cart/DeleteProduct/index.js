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
    }

    return (
        <>
            <button className="fa fa-trash" style={{ border: 'none', cursor: 'pointer', fontSize: '15px', backgroundColor: 'rgba(0, 128, 0, 0.00)' }} onClick={handleDeleteProdctBtn} />


        </>
    )
}