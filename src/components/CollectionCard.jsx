
import { PriceFormatter } from "../store/store"

export default function CollectionCard({name, price, img}) {
    return (
        <div className="m-4">
            <div className="d-flex align-items-center justify-content-between">
                <p>{name}</p>
                <p>{PriceFormatter(price)}</p>
            </div>
            { img && <img src={img} alt='shoe name' />}
        </div>
    )
}
