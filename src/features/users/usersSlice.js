import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {client} from '../../api/client.js'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.data
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    redusers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default usersSlice.reducer