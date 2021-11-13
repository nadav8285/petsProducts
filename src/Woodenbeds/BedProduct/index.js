import { ProductsList } from '../../ProductsData';
import { useContext } from 'react';
import { useParams } from 'react-router';
import Bed1 from '../../Pictures/WoodenBeds/firstBed.jpg'
import Satin from '../../Pictures/WoodenBeds/satinbed.jpg'
import Shifon from '../../Pictures/WoodenBeds/shifonbed.jpg'
import Egoz from '../../Pictures/WoodenBeds/egozbed.jpg'
import CartPaymentBtns from '../../CartPaymentBtns';
import './product.css'
import { useState } from 'react';

const productColors = { satin: { name: 'כחול צפחה', img: Satin }, shifon: { name: 'שיפון', img: Shifon }, egoz: { name: 'אגוז', img: Egoz } }

export default function BedProduct() {

    const productsInfo = useContext(ProductsList)
    const { bedname } = useParams()
    const [sizeBorder, setSizeBorder] = useState(false)
    const [buttonBorder, setButtonBorder] = useState(false)
    const filterIt = productsInfo.products.filter(prdctName => prdctName.name === bedname)
    function borderColorButton(e) {
        setButtonBorder(e.target.name)
    }
    return (
        <>

            {filterIt.length === 0 ? "" :
                <div className="flexbox-container">
                    <img className="flex-item imageControl" src={Bed1} alt='bla'></img>

                    <div className="flex-item productTitle">
                        <div className="alignHeader">
                            <div > <h1 style={{ fontWeight: 'inherit', fontSize: '35px', margin: 'auto' }}>מיטה {filterIt[0].name} לכלבים וחתולים מעץ</h1></div>
                            <div style={{ marginBottom: '30px' }}>
                                <div style={{ margin: '25px' }}>
                                    <b >בחירת מידה*</b>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '15%', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                    {filterIt[0].productInfo.map((x, y) => {
                                        return (
                                            <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                <button onClick={() => (setSizeBorder(x.size))} style={{ backgroundColor: 'white', border: `none`, cursor: 'pointer', border: `${sizeBorder === x.size ? 'solid' : 'none'}`, width: '80px', height: '60px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', borderRadius: '10%' }}>  <span ><b style={{ color: '#f2a128' }}>{x.size}</b ></span></button><b style={{ marginTop: '5px' }}>{x.price}₪</b>
                                            </div>)
                                    })}
                                </div>
                                <div style={{ margin: '25px' }}>
                                    <b >בחירת צבע המיטה*</b>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    {filterIt[0].color.map((x, y) => {
                                        return (<div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>


                                            <button onClick={() => (setButtonBorder(productColors[x].name))} style={{ backgroundColor: 'white', border: `none`, cursor: 'pointer' }}> <img src={productColors[x].img} style={{ width: '80px', height: '60px', borderRadius: '10%', border: `${buttonBorder === productColors[x].name ? 'solid' : 'none'}` }} alt="" />
                                            </button>
                                            <b >{productColors[x].name}</b>


                                        </div>)
                                    })}
                                </div>
                            </div>
                            <div className="centerPrice">   <i style={{ fontWeight: 'bold', fontSize: '30px' }}>₪{filterIt[0].price}</i></div></div>

                        <CartPaymentBtns props={filterIt[0]} />
                    </div>
                    <div style={{ marginTop: '15px' }} className="flex-item productDescription">
                        <p>תיאור המוצר: בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה</p>
                        <i>מידות: {filterIt[0].productInfo.map((h) => { console.log(h._id) })}</i><br />
                        <li>3 ימי עסקים!</li>
                        <li>אפשרות לשליח עד הבית או איסוף עצמי</li>
                        <li>המחיר הזול ביותר</li>
                        <p>תיאור המוצר בהרחבה: בלה בלה בלה בלה בלה</p></div>

                </div>

            }</>
    )

}