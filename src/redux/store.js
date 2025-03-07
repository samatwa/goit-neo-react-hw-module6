import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from "./contactsSlice";
import {filtersReducer} from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistContactsConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistContactsConfig, contactsReducer);

const rootReducer = combineReducers({
  contacts: persistedReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);