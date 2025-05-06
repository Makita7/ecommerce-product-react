import { useShopStore } from '../store/store';
import CollectionCard from '../components/CollectionCard';

export default function CollectionsPage() {

    const products = useShopStore((state) => state.products);

    return (
        <>
            {products.map((product, index) => (
                <CollectionCard key={index} name={product.name} price={product.price} id={product.id} img={product.photos} />
            ))}
        </>
    )
}
