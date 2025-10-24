import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";

interface User {
    id: number
    name: string
    email: string
}

interface UsersData{
    list: User [];
    status: string
    error: string | null
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    return data;
})

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        status: "idle",
        error: null,
    } as UsersData,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = "loading"
        }).addCase(fetchUsers.fulfilled, (state, action) =>{
            state.status = "succeeded"
            state.list = action.payload
        }).addCase(fetchUsers.rejected, (state, Action) =>{
            state.status = "failed"
            state.error = Action.error.message || "Unknown error"
        })
    },
})

export default usersSlice.reducer;