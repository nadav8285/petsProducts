
export default function DeliveryOrTakeaway({ delivery }) {



    return (
        <>

            <form>
                <div style={{ display: 'flex', flexDirection: 'column', marginRight: '25px' }}>
                    <i style={{ fontWeight: 'bold', marginBottom: '7px' }}>פרטי מסירה:</i>
                    <label>
                        <input type='radio' onChange={() => delivery.setDelivery(50)} value='true' name="delivery" />
                        שליח עד הבית (50₪)
                    </label>
                    <lable>
                        <input type='radio' onChange={() => delivery.setDelivery(0)} value='false' name="delivery" />
                        איסוף עצמי (0₪)
                    </lable>
                </div>
            </form>

        </>
    )
}