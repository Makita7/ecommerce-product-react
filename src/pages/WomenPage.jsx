import { useShopStore } from "../store/store";
import CollectionCard from "../components/CollectionCard";

export default function WomenPage() {

    const products = useShopStore(state => state.products).filter(products => products.gender === "women" || products.gender === "unisex"
    );

    return (
        <>
            <div className='d-md-flex flex-md-wrap justify-content-md-center'>
                {products.map((product, index) => (
                    <CollectionCard key={index} name={product.name} price={product.price} stock={product.stock} id={product.id} img={product.photos} />
                ))}
            </div>
        </>
    )
}
