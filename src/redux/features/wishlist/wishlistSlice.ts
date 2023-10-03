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


interface IWishlist {
    books: IBook[];
    total: number;
}

const initialState: IWishlist = {
    books: [],
    total: 0,
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<IBook>) => {
            const existing = state.books.find(book => book._id == action.payload._id);
            if (!existing) {
                state.books.push({ ...action.payload })
                state.total += 1

            }
        },
        removeFromWishlist: (state, action: PayloadAction<IBook>) => {
            state.books = state.books.filter(book => book._id !== action.payload._id);
            if (state.total > 0) {
                state.total -= 1
            }

        },
    },
});

const persistedWishlistSliceReducer = persistReducer(persistConfig, wishlistSlice.reducer);
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default persistedWishlistSliceReducer;