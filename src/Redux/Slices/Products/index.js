import {createSlice} from '@reduxjs/toolkit'

export const productsSlice  = createSlice({
    initialState: {
        list: [],
      },
    name: "products",
    reducers: {
        setProducts(state, action) {
           
          state.list = action.payload;
          //console.log(state.userlist.data);
        },
    },
});

export const {setProducts } = productsSlice .actions;
export default productsSlice .reducer;