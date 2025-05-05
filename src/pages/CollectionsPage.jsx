import { useShopStore } from '../store/store';
import ShoeCard from '../components/ShoeCard';

export default function CollectionsPage() {

    const products = useShopStore((state) => state.products);

    return (
        <>
            {products.map((product, index) => (
                <ShoeCard key={index} data={product.name} />
            ))}
        </>
    )
}
