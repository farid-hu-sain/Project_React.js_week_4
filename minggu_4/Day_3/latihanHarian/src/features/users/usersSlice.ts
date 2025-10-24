import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface User {
    id: number
    name: string
    email: string
}

interface UserState {
    data: User[]
    loading: boolean
    error: string | null
}

const initialState: UserState = {
    data: [],
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data as User[];
});

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong";
        })
    }
})

export default userSlice.reducer;