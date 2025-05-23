import {configureStore} from "@reduxjs/toolkit";
// import {useGetAllProductsQuery} from "../service/FakeProductApi.jsx";
import {setupListeners} from "@reduxjs/toolkit/query";
import {FakeProductApiSlice} from "../service/FakeProductApi.jsx";
import {DummyStoreApiSlice} from "../service/DummyStoreApi.jsx";

export const store = configureStore({
    reducer: {
        [FakeProductApiSlice.reducerPath]: FakeProductApiSlice.reducer,
        [DummyStoreApiSlice.reducerPath]: DummyStoreApiSlice.reducer
    },
    middleware: (getDefaultMiddleware)  => (
        getDefaultMiddleware().concat(FakeProductApiSlice.middleware, DummyStoreApiSlice.middleware)
    )
})

setupListeners(store.dispatch);