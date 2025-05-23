import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const productApiUrl = 'https://dummyjson.com';

export const DummyStoreApiSlice = createApi({
    reducerPath: 'dummy_products',
    baseQuery: fetchBaseQuery({baseUrl: `${productApiUrl}`}),
    endpoints: (builder) => ({
        getAllDummyProducts: builder.query({
            query: () => `/products`
        })
    })
})

export const {useGetAllDummyProductsQuery} = DummyStoreApiSlice;