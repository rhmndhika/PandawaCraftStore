import React from "react";
export interface Product {
    id: string,
    name: string,
    photo: string,
    description: string,
    stock: number,
    price: number,
    kategori: string,
    sellerId: string
}

export interface Cart {
    id: string,
    name: string,
    photo: string,
    description: string,
    stock: number,
    price: number,
    kategori: string,
    sellerId: string
}

export interface Category {
    id: string,
    name: string,
    photo: string,
    description: string,
    stock: number,
    price: number,
    kategori: string,
    sellerId: string
}

export interface Description {
    id: string,
    name: string,
    photo: string,
    description: string,
    stock: number,
    price: number,
    kategori: string,
    sellerId: string
}

interface Context {
    products: Product[];
    carts: Cart[];
    categories: Category[];
    descriptions: Description[];
    addCart: (id: string) => void
    selectCategory: (kategori : string) => void
    selectProduct: (id : string) => void
    deleteProduct: (id: string) => void
}

const StoreContext = React.createContext<Context>({
    products: [],
    carts: [],
    categories: [],
    descriptions: [],
    addCart: () => {},
    selectCategory: () => {},
    selectProduct: () => {},
    deleteProduct: () => {}
});

export default StoreContext;