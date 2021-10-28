import { ProductsList } from '../../ProductsData';
import { useContext } from 'react';
import { useParams } from 'react-router';
import Bed1 from '../../Pictures/WoodenBeds/firstBed.jpg'
import CartPaymentBtns from '../../CartPaymentBtns';
import './product.css'

export default function BedProduct() {

    const productsInfo = useContext(ProductsList)
    const { bedname } = useParams()
    const filterIt = productsInfo.products.filter(prdctName => prdctName.name === bedname)

    return (
        <>

            {filterIt.length === 0 ? "" :
                <div className="flexbox-container">
                    <img className="flex-item imageControl" src={Bed1} alt='bla'></img>

                    <div className="flex-item productTitle">
                        <div className="alignHeader">
                            <div > <h1 style={{ fontWeight: 'inherit', fontSize: '35px', margin: 'auto' }}>מיטה {filterIt[0].name} לכלבים וחתולים מעץ</h1></div>
                            <div className="centerPrice">   <i style={{ fontWeight: 'bold', fontSize: '30px' }}>₪{filterIt[0].price}</i></div></div>

                        {/* <div className="underPrdctTitle">
                            <label for="size">מידה</label>
                            <select className="select" name="size" id="cars">
                                <option value="45x20">45x20</option>
                                <option value="60x40">60x40</option>
                                <option value="90x60">90x60</option>
                            </select>
                            <input type="text" className="color_size_input" />
                            <input type="text" className="color_size_input" />
                            <button>Click Here</button>
                        </div> */}

                        <CartPaymentBtns props={filterIt[0]} />
                    </div>
                    <div className="flex-item productDescription">
                        <p>תיאור המוצר: בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה</p>
                        <i>מידות: {filterIt[0].size}</i><br />
                        <li>3 ימי עסקים!</li>
                        <li>אפשרות לשליח עד הבית או איסוף עצמי</li>
                        <li>המחיר הזול ביותר</li>
                        <p>תיאור המוצר בהרחבה: בלה בלה בלה בלה בלה</p></div>

                </div>

            }</>
    )

}