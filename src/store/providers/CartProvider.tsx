// import React, { useState, useEffect } from 'react';
// import { CartContext } from '../context';

// import * as _ from 'lodash';

// type Props = {
//     children?: any
// }

// let request;
// let db;

// export default ({ children }: Props) => {

//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         request = window.indexedDB.open('CartDatabase', 1);

//         request.onsuccess = function (event) {
//             db = request.result;
//             readCart();
//             console.log('success:' + request.result);
//         }

//         request.onerror = function (event) {
//             console.log('[onerror]', request.error);
//         }

//         request.onupgradeneeded = function (event) {
//             db = _.get(event, 'target.result');
//             db.createObjectStore('cart', { keyPath: 'id', autoIncrement: true });

//         }
//     }, [])

//     function addToCart(docId: string, code: string, qty: number, price: number, sale: number, imgUrl: string, tags: Array<any>) {

//         var request = db.transaction(["cart"], "readwrite")
//             .objectStore("cart")
//             .add({
//                 docId: docId,
//                 code: code,
//                 qty: qty,
//                 price: price,
//                 imgUrl: imgUrl,
//                 sale: sale,
//                 tags: tags
//             });

//         request.onsuccess = function (event) {
//             console.log("SUCCESS")
//             readCart();
//         };

//         request.onerror = function (event) {
//             console.log("ERROR")
//         }
//     }

//     function readCart() {
//         const objectStore = db.transaction(["cart"]).objectStore("cart");

//         let datas = []

//         objectStore.openCursor().onsuccess = function (event) {
//             var cursor = event.target.result;

//             if (cursor) {
//                 datas.push(cursor.value)
//                 cursor.continue();
//             } else {
//                 setCart(datas);
//                 console.log(datas);
//             }
//         };


//     }

//     function deleteCartItem(id: number) {
//         var request = db.transaction(["cart"], "readwrite")
//             .objectStore("cart")
//             .delete(id);

//         request.onsuccess = function (event) {
//             console.log("SUCCESS")
//             readCart();
//         };

//         request.onerror = function (event) {
//             console.log("ERROR")
//         }
//     }

//     function clearCart() {
//         var request = db.transaction(["cart"], "readwrite")
//             .objectStore("cart").clear();

//         request.onsuccess = function (event) {
            
//             console.log("SUCCESS")
//             readCart();
//         };

//         request.onerror = function (event) {
//             console.log("ERROR")
//         }
//     }


//     function getCartTotalPrice(): number {
//         let totalPrice = 0;
//         cart.forEach((crt) => {
//             const price = _.get(crt, 'price');
//             const sale = _.get(crt, 'sale');
//             const qty = _.get(crt, 'qty');
//             if (sale) { totalPrice += sale * qty; }
//             else { totalPrice += price * qty; }
//         });
//         return totalPrice;
//     }

//     useEffect(() => {

//     }, []);

//     return (
//         <CartContext.Provider value={{ cart: cart, addToCart: addToCart, getCartTotalPrice: getCartTotalPrice, deleteCartItem: deleteCartItem, clearCart: clearCart }} >
//             {children}
//         </CartContext.Provider>
//     );
// }