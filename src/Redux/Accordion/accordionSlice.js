const { createSlice } = require("@reduxjs/toolkit");
const initialState = [
        {   
            category : 'Men',
            items: ["Shirts", "Pants", "Party Wear", "Coats"]

        },
        {   
            category : 'Women',
            items: ["Shirts", "Pants", "Party Wear", "Coats"]

        },
        {   
            category : 'Kids',
            items: ["Tshirt", "Pyjams", "Jumpsuit", "Sweats"]

        }
    ]

const accordionSlice = createSlice({
    name: 'accordion',
    initialState
});

export default accordionSlice;