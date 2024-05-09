import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: {
        list: [],
      },
    name: "users",
    reducers: {
        setUsers(state, action) {
           
          state.list = action.payload;
          //console.log(state.userlist.data);
        },
    },
});

export const {setUsers } = counterSlice.actions;
export default counterSlice.reducer;