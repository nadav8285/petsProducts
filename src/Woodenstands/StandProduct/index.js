import { ProductsList } from '../../ProductsData';
import { useContext } from 'react';
import { useParams } from 'react-router';
import Bed1 from '../../Pictures/WoodStands/firstStand.jpg'
import CartPaymentBtns from '../../CartPaymentBtns';

export default function StandProduct() {

    const products = useContext(ProductsList)
    const { standname } = useParams()
    const filterIt = products.products.filter(prdctName => prdctName.name === standname)

    // const filterIt = products.filter(prdctName => prdctName.name === standname)

    return (
        <>

            {filterIt.length === 0 ? "" :
                <div className="flexbox-container">
                    <img className="flex-item imageControl" src={Bed1} alt='bla'></img>

                    <div className="flex-item productTitle">
                        <div className="alignHeader">
                            <div > <h1 style={{ fontWeight: 'inherit', fontSize: '35px', margin: 'auto' }}>מעמד לקערות {filterIt[0].name} לכלבים וחתולים מעץ</h1></div>
                            <div className="centerPrice">   <i style={{ fontWeight: 'bold', fontSize: '30px' }}>₪{filterIt[0].price}</i></div></div>

                        <CartPaymentBtns props={filterIt[0]} />
                    </div>
                    <div style={{ marginTop: '15px' }} className="flex-item productDescription">
                        <p>תיאור המוצר: בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה</p>
                        <i>מידות: {filterIt[0].size}</i><br />
                        <li>3 ימי עסקים!</li>
                        <li>אפשרות לשליח עד הבית או איסוף עצמי</li>
                        <li>המחיר הזול ביותר</li>
                        <p>תיאור המוצר בהרחבה: בלה בלה בלה בלה בלה</p></div>

                </div>

            }
            {/* <div className='upperMainProduct'>
                <div className="mainProduct">
                    <div className="lix">

                        {filterIt.length === 0 ? "" : <div>
                            <h1>{filterIt[0].name}</h1>
                            <hr className="productPageHr" />
                            <p>תיאור המוצר: בלה בלה בלה בלה בלה</p>
                            <i>מידות: {filterIt[0].size}</i><br />
                            <i>מחיר: {filterIt[0].price} ש"ח בלבד</i><br />

                            <i></i>
                            <i></i><br /></div>}
                        <li>3 ימי עסקים!</li>
                        <li>אפשרות לשליח עד הבית או איסוף עצמי</li>
                        <li>המחיר הזול ביותר</li>
                        <p>תיאור המוצר בהרחבה: בלה בלה בלה בלה בלה</p>
                    </div>
                </div>
            </div> */}
        </>
    )

}