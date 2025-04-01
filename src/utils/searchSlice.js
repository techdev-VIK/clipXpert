import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state,action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;




//we can use object so that keys can be used and the complexity can be like O(1)


// eg. {iph: [iph, iphone, iphone 14] }


//can also use new Map() for better results


// LRU - Least Recently Used - can be used to limit the results 