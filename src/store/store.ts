
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
        { id: 1, name: 'Sneakers1', price: 120, stock: 10, discount: 50, photos:[] },
        { id: 2, name: 'Sneakers2', price: 25, stock: 5, discount: 15, photos:[] },
        { id: 3, name: 'Sneakers3', price: 15, stock: 2, discount: 30, photos:[] },
        { id: 4, name: 'Sneakers4', price: 15, stock: 13, discount: 0, photos:[] },
    ],
    cart: [],
    string: "string store",
}))
