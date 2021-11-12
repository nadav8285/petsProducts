
export default function DeliveryOrTakeaway({ delivery, totalPriceProps }) {



    return (
        <>
            {console.log(totalPriceProps)}
            <form>
                <div style={{ display: 'flex', flexDirection: 'column', marginRight: '25px' }}>
                    <i style={{ fontWeight: 'bold', marginBottom: '7px' }}>פרטי מסירה:</i>
                    <label>
                        <input type='radio' disabled={totalPriceProps ? false : true} onChange={() => delivery.setDelivery(50)} value='true' name="delivery" />
                        שליח עד הבית (50₪)
                    </label>
                    <lable>
                        <input type='radio' disabled={totalPriceProps ? false : true} onChange={() => delivery.setDelivery(0)} value='false' name="delivery" />
                        איסוף עצמי (0₪)
                    </lable>
                </div>
            </form>

        </>
    )
}