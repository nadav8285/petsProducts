import { useParams } from "react-router"


export default function OrderSearch({ authorized }) {

    const { orderId } = useParams()

    return (
        <div>
            <h1>{orderId}</h1>

        </div>

    )
}