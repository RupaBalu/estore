import { createSlice } from "@reduxjs/toolkit";

    const initialState = [
        {
            productName: 'Jacket',
            productPrice: 1000,
            img: "img1.jpg"
        },
         {
            productName: 'Jacket',
            productPrice: 100,
            img: "img2.jpg"
        },
         {
            productName: 'Jacket',
            productPrice: 100,
            img: "img3.jpg"
        },
         {
            productName: 'Coat',
            productPrice: 100,
            img: "img3.jpg"
        },
         {
            productName: 'Shirt',
            productPrice: 100,
            img: "img2.jpg"
        },
         {
            productName: 'Boots',
            productPrice: 100,
            img: "img1.jpg"
        },
         {
            productName: 'Shoes',
            productPrice: 100,
            img: "img2.jpg"
        },
         {
            productName: 'Crocks',
            productPrice: 100,
            img: "img1.jpg"
        },
         {
            productName: 'Sandals',
            productPrice: 100,
            img: "img3.jpg"
        },

    ];

    const productslice = createSlice({
        name: 'Products',
        initialState
    })

    export default productslice;