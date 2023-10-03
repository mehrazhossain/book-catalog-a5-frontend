import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistConfig from "../../../utils/persistConfig";

interface IBook {
    admin: string;
    author: string;
    cover_img: string;
    createdAt: string;
    genre: string;
    id: string;
    publicationYear: string;
    reviews: string[];
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}


interface IMyBooks {
    books: IBook[];
}

const initialState: IMyBooks = {
    books: [],
}

const mybookSlice = createSlice({
    name: 'mybooks',
    initialState,
    reducers: {
        addToMybooks: (state, action: PayloadAction<IBook>) => {
            const existing = state.books.find(book => book._id == action.payload._id);
            if (!existing) {
                state.books.push({ ...action.payload })
            }
        },
        removeFromMybooks: (state, action: PayloadAction<IBook>) => {
            state.books = state.books.filter(book => book._id !== action.payload._id);
        },
    },
});

const persistedMyBookSliceReducer = persistReducer(persistConfig, mybookSlice.reducer);
export const { addToMybooks, removeFromMybooks } = mybookSlice.actions;
export default persistedMyBookSliceReducer;