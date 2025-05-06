
import { create } from 'zustand';

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
            name: 'Sneakers1',
            detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            price: 120,
            stock: 10,
            discount: 50,
            photos:['../assets/image-product-1.jpg']
        },
        {
            id: 2,
            name: 'Fall Limited Edition Sneakers',
            detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            price: 25,
            stock: 5,
            discount: 15,
            photos:[]
        },
        {
            id: 3,
            name: 'Sneakers3',
            detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            price: 15,
            stock: 2,
            discount: 30,
            photos:[]
        },
        {
            id: 4,
            name: 'Sneakers4',
            detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            price: 15,
            stock: 13,
            discount: 0,
            photos:[]
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