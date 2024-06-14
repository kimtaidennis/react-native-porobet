import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { gamesState, initialState } from "../../models/models";

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login ( state, action: PayloadAction<boolean>): gamesState { 
            return {
                ...state,
                user: action.payload
            }
        }
    }
});

export const { 
    login
} = authSlice.actions;

export default authSlice.reducer;