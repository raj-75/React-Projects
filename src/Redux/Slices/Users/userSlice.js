// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    //console.log(response.data.data);
  return response.data.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (userData) => {
 
  const response = await axios.put('https://reqres.in/api/users/2', userData);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    first_name: '',
    last_name: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = 'succeeded';
        state.id = action.payload.id;
        state.first_name = action.payload.first_name;
        state.last_name = action.payload.last_name;
        //console.log(action.payload.first_name);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload.id;
        state.first_name = action.payload.first_name;
        state.last_name = action.payload.last_name;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

export const { } = userSlice.actions;