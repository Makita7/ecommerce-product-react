
import { create } from 'zustand';
import Sneakers1One from '../assets/image-product-1.jpg';
import Sneakers1Two from '../assets/image-product-2.jpg';
import Sneakers1Three from '../assets/image-product-3.jpg';
import Sneakers1Four from '../assets/image-product-4.jpg';
import Sneaker2One from '../assets/Sneaker-Two2.jpg';
import Sneaker2Two from '../assets/Sneaker-Two1.jpg';
import Sneaker3One from '../assets/Sneaker-Three2.jpg';
import Sneaker3Two from '../assets/Sneaker-Three1.jpg';
import Sneaker4One from '../assets/Sneaker-Four1.jpg';
import Sneaker4Two from '../assets/Sneaker-Four2.jpg';
import Sneaker5One from '../assets/Sneaker-Five1.jpg';
import Sneaker5Two from '../assets/Sneaker-Five2.jpg';
import Sneaker6One from '../assets/Sneaker-Six1.jpg';
import Sneaker6Two from '../assets/Sneaker-Six2.jpg';
import Sneaker7One from '../assets/Sneaker-Seven1.jpg';
import Sneaker7Two from '../assets/Sneaker-Seven2.jpg';
import Sneaker8One from '../assets/Sneaker-Eight1.jpg';
import Sneaker8Two from '../assets/Sneaker-Eight2.jpg';
import Sneaker9One from '../assets/Sneaker-Nine1.jpg';
import Sneaker9Two from '../assets/Sneaker-Nine2.jpg';

interface Product {
    id: number,
    name: string,
    price: number,
    stock: number,
    discount: number,
    photos: string[],
}

interface CartItem {
    productId: number,
    quantity: number,
}

interface ShopState {
    products: Product[],
    cart: CartItem[],
    string: string,
}

export const useShopStore = create<ShopState>(() => ({
    products: [
        {
            id: 1,
            name: 'Fall Limited Edition Sneakers',
            detail: "Designed for the fast pace of city life, the Urban Runner blends sleek aesthetics with lightweight functionality. With a cushioned insole and breathable mesh upper, these sneakers are perfect for everyday wear whether you're commuting, grabbing coffee, or heading to the park.",
            price: 110,
            stock: 20,
            discount: 12,
            gender: "unisex",
            photos:[Sneakers1One, Sneakers1Two, Sneakers1Three, Sneakers1Four],
        },
        {
            id: 2,
            name: 'Lime Trail Flex',
            detail: "Conquer rugged terrain with confidence in the Trail Flex. Engineered for outdoor adventures, these shoes feature a reinforced sole with deep tread for excellent grip, ankle support for stability, and water-resistant materials to keep your feet dry in unpredictable conditions.",
            price: 130,
            stock: 8,
            discount: 0,
            gender: "men",
            photos:[Sneaker2One, Sneaker2Two],
        },
        {
            id: 3,
            name: 'Luna Flow',
            detail: "The Luna Flow offers a perfect mix of performance and elegance. Crafted with soft, breathable fabrics and a curved silhouette that flatters the foot, it’s ideal for light workouts, walks around town, or pairing with your favorite casual outfit.",
            price: 150,
            stock: 2,
            discount: 30,
            gender: "women",
            photos:[Sneaker3One, Sneaker3Two],
        },
        {
            id: 4,
            name: 'Core Trainer',
            detail: "A reliable choice for fitness enthusiasts, the Core Trainer adapts seamlessly from the gym to the streets. With responsive cushioning, strong lateral support, and a clean modern look, these shoes deliver versatility, comfort, and performance throughout your day.",
            price: 195,
            stock: 0,
            discount: 14,
            gender: "unisex",
            photos:[Sneaker4One, Sneaker4Two],
        },
        {
            id: 5,
            name: 'Aero Pulse',
            detail: "Built for speed and endurance, the Aero Pulse provides shock-absorbing comfort with every stride. The breathable knit upper and reinforced heel create a secure fit, making it the ideal choice for runners who demand performance and support without compromising style.",
            price: 140,
            stock: 9,
            discount: 25,
            gender: "men",
            photos:[Sneaker5One, Sneaker5Two],
        },
        {
            id: 6,
            name: 'Velvet Step',
            detail: "Elevate your everyday look with the Velvet Step. These low-profile sneakers come in a soft suede finish and feature memory foam soles for all-day comfort. Perfect for running errands, work days, or pairing with your favorite dress or jeans.",
            price: 86,
            stock: 7,
            discount: 12,
            gender: "women",
            photos:[Sneaker6One, Sneaker6Two],
        },
        {
            id: 7,
            name: 'Wave Knit',
            detail: "With its seamless knit upper and flexible sole, the Wave Knit feels like a second skin. These ultra-light sneakers move with you, adapting to your stride while keeping your feet cool and supported. Perfect for long walks, travel, or casual outings.",
            price: 105,
            stock: 10,
            discount: 5,
            gender: "unisex",
            photos:[Sneaker7One, Sneaker7Two],
        },
        {
            id: 8,
            name: 'Echo Glide',
            detail: "Step into the minimalist mindset with Echo Glide. Stripped of unnecessary bulk, these shoes feature a sleek profile, padded footbed, and neutral tones, making them a staple for the modern man seeking comfort and understated style.",
            price: 90,
            stock: 20,
            discount: 0,
            gender: "men",
            photos:[Sneaker8One, Sneaker8Two],
        },
        {
            id: 9,
            name: 'Bloom Dash',
            detail: "Infused with color and joy, the Bloom Dash is a cheerful addition to your sneaker collection. Lightweight and breathable, with soft inner lining and a bouncy sole, these sneakers are made to brighten your step wherever the day takes you.",
            price: 88,
            stock: 11,
            discount: 13,
            gender: "men",
            photos:[Sneaker9One, Sneaker9Two],
        },
    ],
    cart: [],
    string: "string store",
}))

export const PriceFormatter = (price:number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
}

export const getDiscountedAmount = (price: number, discount:number) =>{
    return price - (price * discount / 100);
}

export const getProdById = (id: number) => {
    return useShopStore.getState().products.find((product) => product.id === id);
}