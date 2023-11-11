import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});
