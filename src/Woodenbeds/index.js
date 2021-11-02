import { useContext } from "react";
import { NavLink } from "react-router-dom";
import './pr.css'
import Bed1 from '../Pictures/WoodenBeds/firstBed.jpg'
import { ProductsList } from '../ProductsData';
import CartPaymentBtns from "../CartPaymentBtns";
import { uuid } from 'uuidv4';
import Carousel from "react-elastic-carousel";



export default function Woodenbeds() {
    const state = {
        items: [
            { id: 1, title: 'item #1' },
            { id: 2, title: 'item #2' },
            { id: 3, title: 'item #3' },
            { id: 4, title: 'item #4' },
            { id: 5, title: 'item #5' }
        ]
    }
    const dataInfo = useContext(ProductsList)

    const filterIt = dataInfo.products.filter(prdctName => prdctName.category === "wooden bed")

    const { items } = state
    return (<>

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
                                <div className='photo'>
                                    <Carousel >
                                        {items.map(item => <div key={item.id}>
                                            <img style={{ width: '100%' }} src={Bed1} alt="" />
                                        </div>)}
                                    </Carousel>
                                </div>
                                <div className="lineHight">
                                    <hr className="mainPageHr" />
                                    <p >תיאור המוצר: בלה בלה בלה</p>
                                    <i className='productPrice' >מחיר: {x.price} ש"ח</i><br />
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