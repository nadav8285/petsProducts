import { ProductsList } from '../../ProductsData';
import { useContext } from 'react';
import { useParams } from 'react-router';
import Bed1 from '../../Pictures/WoodenBeds/firstBed.jpg'

import CartPaymentBtns from '../../CartPaymentBtns';
import './product.css'
import { useState } from 'react';
import ColorAndSizeBtns from '../../ColorAndSizeBtns';


export default function BedProduct(props) {

    const productsInfo = useContext(ProductsList)
    const { bedname } = useParams()


    const [updatedCart, setUpdatedCart] = useState()
    const filterIt = productsInfo.products.filter(prdctName => { return prdctName.name === bedname })


    return (
        <>

            {filterIt.length === 0 ? "" :
                <div className="flexbox-container">
                    <img className="flex-item imageControl" src={Bed1} alt='bla'></img>

                    <div className="flex-item productTitle">
                        <div className="alignHeader">
                            <div > <h1 style={{ fontWeight: 'inherit', fontSize: '35px', margin: 'auto' }}>מיטה {filterIt[0].name} לכלבים וחתולים מעץ</h1></div>
                            <div style={{ marginBottom: '30px' }}>

                                <ColorAndSizeBtns products={filterIt[0]} cartUpdate={setUpdatedCart} />
                            </div>
                            <div className="centerPrice">   <i style={{ fontWeight: 'bold', fontSize: '30px' }}>₪{filterIt[0].price}</i></div></div>

                        <CartPaymentBtns props={updatedCart} />
                    </div>
                    <div style={{ marginTop: '15px' }} className="flex-item productDescription">
                        <p>תיאור המוצר: בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה</p>
                        <li>3 ימי עסקים!</li>
                        <li>אפשרות לשליח עד הבית או איסוף עצמי</li>
                        <li>המחיר הזול ביותר</li>
                        <p>תיאור המוצר בהרחבה: בלה בלה בלה בלה בלה</p></div>

                </div>

            }</>
    )

}