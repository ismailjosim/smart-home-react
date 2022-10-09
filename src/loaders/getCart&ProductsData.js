
// export const myFunc = () => fetch('products.json');

import { getStoredCart } from '../utilities/fakeDB';

export const ProductAndCartData = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();


    // get data from local storage
    const savedCart = getStoredCart();
    const initialCart = [];

    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id);
        if (foundProduct) {
            const quantity = savedCart[id];
            foundProduct.quantity = quantity;
            initialCart.push(foundProduct);
        }
    }

    return { products, initialCart };

}
