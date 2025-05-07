import { useShopStore } from '../store/store.ts'
import CollectionCard from '../components/CollectionCard.jsx'

export default function MenPage() {

    const products = useShopStore(state => state.products).filter(products => products.gender === "men" || products.gender === "unisex"
    );

    return (
        <>
            {products.map((product, index) => (
                <CollectionCard key={index} name={product.name} price={product.price} stock={product.stock} id={product.id} img={product.photos} />
            ))}
        </>
    )
}
