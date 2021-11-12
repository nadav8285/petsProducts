import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Bed1 from '../Pictures/WoodStands/firstStand.jpg'
import { ProductsList } from '../ProductsData';
import { uuid } from "uuidv4";
import CartPaymentBtns from "../CartPaymentBtns";
import Carousel from "react-elastic-carousel";


export default function Woodenstands() {
    const dataInfo = useContext(ProductsList)
    const state = {
        items: [
            { id: 1, title: 'item #1' },
            { id: 2, title: 'item #2' },
            { id: 3, title: 'item #3' },
            { id: 4, title: 'item #4' },
            { id: 5, title: 'item #5' }
        ]
    }



    const filterIt = dataInfo.products.filter(prdctName => prdctName.category === "wooden stand")

    const { items } = state
    return (<>
        <div style={{ direction: 'rtl', marginRight: '25px' }}>
            <div style={{ width: '60%', fontSize: '18px', fontFamily: "Alef Hebrew" }}>
                <h1>מעמד לקערות אוכל ומים מעץ מלא מסוג אורן לכלבים וחתולים</h1>
                <h2>היגיינה, הרבה פחות חיידקים ומחלות</h2>
                <p>מלבד היותו מוצר יפה המוסיף לגיוון העיצוב בבית, מעמד לקערות מעץ מונע מלכלוכים, שיערות וחיידקים רבים להכנס אל תוך מי השתיה והאוכל של הכלבים או החתולים שלנו בכך שהוא מעט מוגבה מהרצפה, וכך לקערות עצמן אין כל מגע עם החלקים הפחות היגיינים בסביבת הכלב והחתול.
                </p>
                <i>לפניכם מגוון רחב של מעמדים לקערות אוכל ומים לכלבים וחתולים. בחרו את המעמד לקערות המתאים ביותר עבורכם ועבור חיית המחמד שלכם! אם אתם לא בטוחים לגבי המידות המתאימות, אל תהססו לפנות אלינו ונשמח לעזור לכם לבחור את המעמד המתאים ביותר.</i>
            </div>
        </div>

        <div className='moreupperbox'>
            <div className='upperbox'>
                <div className="box">
                    {filterIt.length === 0 ? "" : filterIt.map((x, y) => {
                        const filteredCategory = filterIt[y].category.split(" ").join("")

                        return (
                            <div className='eachPrdct' key={uuid()}>
                                <div className="upperPrdctTitle">
                                    <NavLink activeClassName='active' className="prdctTitle" to={`/${filteredCategory}/${x.name}`}>{x.name}</NavLink>
                                </div>
                                <Carousel >
                                    {items.map(item => <div key={item.id}>
                                        <img style={{ width: '100%' }} src={Bed1} alt="" />
                                    </div>)}
                                </Carousel>
                                <div className="lineHight">
                                    <hr className="mainPageHr" />
                                    <p style={{ fontWeight: 'bold' }}>תיאור המוצר: בלה בלה בלה</p>
                                    <i className='productPrice'> מחיר: {x.price} ש"ח</i><br />
                                    <i>מידה: {x.size}</i><br />
                                    <i>צבע: {x.color}</i><br />
                                    <i style={{ color: Number(x.inStoke) === 0 ? 'red' : 'green' }}>במלאי: {x.inStoke}</i><br />
                                    <i>{x.photo}</i>
                                </div>

                                <CartPaymentBtns props={x} />

                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    </>)


}