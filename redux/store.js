import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loaderSlice from './slices/loaderSlice';
import professionSlice from './slices/professionSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    loader:loaderSlice,
    professions:professionSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});
export const persistor = persistStore(store);