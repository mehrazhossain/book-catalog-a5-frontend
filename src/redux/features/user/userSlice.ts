import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistConfig from "../../../utils/persistConfig";
import { clearPersist } from "../../../utils/helpers";

interface IUserState {
    userName: string;
    email: string;
    accessToken: string;
    isLoading: boolean;
}

const initialState: IUserState = {
    userName: "",
    email: "",
    accessToken: "",
    isLoading: false
}

const userSlice = createSlice({
    name: 'setUser',
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction<IUserState>) => {
            return action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        clearUser: () => {
            localStorage.clear();
            clearPersist();
            return initialState;
        },

    }
})
const persistedUserSliceReducer = persistReducer(persistConfig, userSlice.reducer);

export const { setUser, clearUser } = userSlice.actions;
export default persistedUserSliceReducer;
