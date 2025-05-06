
import { PriceFormatter } from "../store/store";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function CollectionCard({name, price, id, img}) {
    const { prodId } = useParams();

    return (
        <Link to={`/product/${id}`} className='text-decoration-none m-4' >
            <div className="d-flex align-items-center justify-content-between">
                <p>{name}</p>
                <p>{PriceFormatter(price)}</p>
            </div>
            { img && <img src={img} alt='shoe name' />}
        </Link>
    )
}
