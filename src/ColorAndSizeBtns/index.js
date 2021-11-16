import { useState } from "react"
import Satin from '../Pictures/WoodenBeds/satinbed.jpg'
import Shifon from '../Pictures/WoodenBeds/shifonbed.jpg'
import Egoz from '../Pictures/WoodenBeds/egozbed.jpg'


const productColors = { satin: { name: 'satin', img: Satin }, shifon: { name: 'shifon', img: Shifon }, egoz: { name: 'egoz', img: Egoz } }
export default function ColorAndSizeBtns({ products, cartUpdate }) {

    const [sizeBorder, setSizeBorder] = useState(false)
    const [buttonBorder, setButtonBorder] = useState(false)
    const [trya, setTrya] = useState(products)

    function borderColorButton(e) {
        const newTodos = { ...trya }
        newTodos['color'] = e
        setTrya(newTodos)
        cartUpdate(newTodos)
        setButtonBorder(e)

    }
    function borderPriceButton(e) {
        const newTodos = { ...trya }
        newTodos['productInfo'] = e
        setTrya(newTodos)
        cartUpdate(newTodos)
        setSizeBorder(e.size)


    }

    // console.log(cartUpdate)
    // console.log(trya)
    return (<>
        <div style={{ margin: '25px' }}>
            <b >בחירת מידה*</b>
        </div>
        <div style={{ display: 'flex', marginBottom: '15%', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
            {products.productInfo.map((x, y) => {
                return (
                    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <button onClick={() => borderPriceButton(x)} style={{ backgroundColor: 'white', cursor: 'pointer', border: `${sizeBorder === x.size ? 'solid' : 'none'}`, width: '80px', height: '60px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', borderRadius: '10%' }}>  <span ><b style={{ color: '#f2a128' }}>{x.size}</b ></span></button><b style={{ marginTop: '5px' }}>{x.price}₪</b>
                    </div>)
            })}
        </div>
        <div style={{ margin: '25px' }}>
            <b >בחירת צבע המיטה*</b>
        </div>
        <div style={{ display: 'flex' }}>
            {products.color.map((x) => {
                return (<div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>


                    <button onClick={() => borderColorButton(productColors[x].name)} style={{ backgroundColor: 'white', border: `none`, cursor: 'pointer' }}> <img name={productColors[x].name} src={productColors[x].img} style={{ width: '80px', height: '60px', borderRadius: '10%', border: `${buttonBorder === productColors[x].name ? 'solid' : 'none'}` }} alt="" />
                    </button>
                    <b >{productColors[x].name}</b>


                </div>)
            })}
        </div>

    </>)
}