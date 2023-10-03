import { combineReducers } from 'redux';
import wishlistReducer from './features/wishlist/wishlistSlice';
import myBookReducer from './features/mybooks/mybooksSlice';
import setUserReducer from './features/user/userSlice';
import { api } from './api/apiSlice';

const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    mybooks: myBookReducer,
    setUser: setUserReducer,
    [api.reducerPath]: api.reducer,

});

export default rootReducer;
