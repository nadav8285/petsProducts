import { useContext } from "react";
import { NavLink } from "react-router-dom";
import './pr.css'
import Bed1 from '../Pictures/WoodenBeds/firstBed.jpg'
import { ProductsList } from '../ProductsData';
import Cart_Payment_Btns from "../Cart_Payment_Btns";
import { uuid } from 'uuidv4';

export default function Woodenbeds() {
    const dataInfo = useContext(ProductsList)



    const filterIt = dataInfo.products.filter(prdctName => prdctName.category === "wooden bed")
    return (

        <div className='moreupperbox'>
            <div className='upperbox'>
                <div className="box">
                    {filterIt === 0 ? "" : filterIt.map((x, y) => {
                        const filteredCategory = filterIt[y].category.split(" ").join("")
                        // console.log(s, 'its filter')
                        return (
                            <div className='eachPrdct' key={uuid()}>
                                <div className="upperPrdctTitle">
                                    <NavLink activeClassName='active' className="prdctTitle" to={`/${filteredCategory}/${x.name}`}>{x.name}</NavLink>
                                </div>
                                <div className="photo">

                                    <img className="image" style={{ width: '400px' }} src={Bed1} alt='ok' />
                                </div>
                                <div className="lineHight">
                                    <hr className="mainPageHr" />
                                    <p style={{ fontWeight: 'bold' }}>תיאור המוצר: בלה בלה בלה</p>
                                    <i>מחיר: {x.price} ש"ח</i><br />
                                    <i>מידה: {x.size}</i><br />
                                    <i>צבע: {x.color}</i><br />
                                    <i style={{ color: Number(x.inStoke) === 0 ? 'red' : 'green' }}>במלאי: {x.inStoke}</i><br />
                                    <i>{x.photo}</i>
                                </div>

                                <Cart_Payment_Btns props={x} />

                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )


}