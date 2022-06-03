import React, {useState} from "react";
import StoreContext, {Cart, Product, Category} from "./store-context";

const StoreContextProvider: React.FC = props => {

    const [products, setProducts] = useState<Product[]>([
        {
            id: '1',
            name: 'Tas Anyaman Plastik',
            photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg',
            description: 'Tas anyaman dari sedotan plastik dengan bentuk dan warna yang lucu.',
            stock: 14,
            price: 215000,
            kategori: "Tas",
            sellerId: '1'
        },
        {
            id: '2',
            name: 'Kapal TokTok Minyak',
            photo: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-10338192/no_brand_kapal_otok_otok_mainan_perahu_jadul_90an_full05_n6i5rfbr.jpg',
            description: 'Mainan kapal dengan bunyi khas klotok berbahan bakar minyak',
            stock: 37,
            price: 20000,
            kategori: "Mainan",
            sellerId: '1'
        },
        {
            id: '3',
            name: 'Kursi Rotan Single',
            photo: 'http://sc04.alicdn.com/kf/H4b5eb15bbca64f3e838a7471246936f8n.jpg',
            description: 'Kursi dari anyaman rotan untuk 1 orang',
            stock: 8,
            price: 300000,
            kategori: "Furniture",
            sellerId: '1'
        },
        {
            id: '4',
            name: 'Tas Anyaman Kupu-Kupu',
            photo: 'http://3.bp.blogspot.com/-XqUAtFoPzQc/VhNBcQYw6NI/AAAAAAAAABU/1OVi9gCTugA/s1600/anyam%2Bbambu.JPG',
            description: 'Tas anyaman dengan motif kupu-kupu yang elegan',
            stock: 16,
            price: 197000,
            kategori: "Tas",
            sellerId: '1'
        },
        {
            id: '5',
            name: 'Tas Anyaman Bungkus Kopi',
            photo: 'https://imagerouter.tokopedia.com/img/700/product-1/2016/11/19/10987228/10987228_2a47dcef-df33-4bad-b3a8-cccaf8819dd2.jpg',
            description: 'Tas anyaman dari bungkus kopi, 100% handmade',
            stock: 6,
            price: 170000,
            kategori: "Tas",
            sellerId: '1'
        },
        {
            id: '6',
            name: 'Tas Anyaman Sachet',
            photo: 'https://i.ytimg.com/vi/JsO9UG9AvXs/maxresdefault.jpg',
            description: 'Tas wanita dari anyaman bekas bungkus sachet minuman',
            stock: 10,
            price: 152000,
            kategori: "Tas",
            sellerId: '1'
        },
        {
            id: '7',
            name: 'Tas Anyaman Coklat',
            photo: 'https://aquariusboyz.files.wordpress.com/2010/11/anyaman.jpg',
            description: 'Tas anyaman dengan kesan elegan dan modern, cocok dipakai kemana saja.',
            stock: 6,
            price: 270000,
            kategori: "Tas",
            sellerId: '1'
        },
        {
            id: '8',
            name: 'Tas Handmade',
            photo: 'https://cf.shopee.co.id/file/b6500b0004c52158b187d5cdeef8a731',
            description: 'Tas handmade dengan daya tahan yang sangat baik serta ukuran cukup besar',
            stock: 11,
            price: 189000,
            kategori: "Tas",
            sellerId: '1'
        }
    ]);

    const [carts, setCarts] = useState<Cart[]>([

    ])

    const [categories, setCategories] = useState<any>([

    ])

    const [descriptions, setDescription] = useState<any>([

    ])


    const addCart = (id: string) => {
        const newCart = products.filter((list) => list.id == id);
        setCarts((currCarts) => {
            return currCarts.concat(newCart);
        });
        // const newList = products.filter((list) => list.id !== id);
        // setProducts(newList);
    };

    const selectCategory = (category: string) => {
        const newCategory : any = products.filter((cat) => cat.kategori == category);
        setCategories(newCategory);
    }

    const selectProduct = (id: string) => {
        const newDescription : any = products.filter((desc) => desc.id == id);
        setDescription(newDescription);
    }

    const deleteProduct = (id: string) => {
        const newProduct = products.filter((product) => product.id !== id);
        setProducts(newProduct);
        }

    return(
        <StoreContext.Provider value={{
            products,
            carts,
            categories,
            descriptions,
            addCart,
            selectCategory,
            selectProduct,
            deleteProduct
        }}>
            {props.children}        
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;