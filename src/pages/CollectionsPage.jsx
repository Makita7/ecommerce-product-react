import { useShopStore } from '../store/store';
import CollectionCard from '../components/CollectionCard';

export default function CollectionsPage() {

    const products = useShopStore((state) => state.products);

    return (
        <div style={{marginBottom: "3rem",}}>
            {products.map((product, index) => (
                <CollectionCard key={index} name={product.name} price={product.price} stock={product.stock} id={product.id} img={product.photos} />
            ))}
        </div>
    )
}
