import { ProductsList } from '../../ProductsData';
import { useContext } from 'react';
import { useParams } from 'react-router';
import Bed1 from '../../Pictures/WoodStands/firstStand.jpg'

export default function StandProduct() {

    const { products } = useContext(ProductsList)
    const { standname } = useParams()
    const filterIt = products.filter(prdctName => prdctName.name === standname)

    return (
        <>
            <div className='upperMainProduct'>
                <div className="mainProduct">
                    <img className="imageControl" style={{ width: '620px' }} src={Bed1} alt='bla'></img>
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
            </div>
        </>
    )

}