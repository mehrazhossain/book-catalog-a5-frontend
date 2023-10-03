import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
};

export default persistConfig;
