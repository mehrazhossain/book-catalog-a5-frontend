import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import wishlistReducer from './features/wishlist/wishlistSlice';
import myBookReducer from './features/mybooks/mybooksSlice';
import setUserReducer from './features/user/userSlice';


const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
        [api.reducerPath]: api.reducer,
        mybooks: myBookReducer,
        setUser: setUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;