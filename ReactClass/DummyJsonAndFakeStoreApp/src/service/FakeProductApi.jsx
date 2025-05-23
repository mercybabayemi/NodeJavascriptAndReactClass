import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const productApiUrl = 'https://fakestoreapi.com';

export const FakeProductApiSlice = createApi({
    reducerPath: 'fake_products',
    baseQuery: fetchBaseQuery({baseUrl: `${productApiUrl}`}),
    endpoints: (builder) => ({
        getAllFakeProducts: builder.query({
            query: () => `/products`
        })
    })
})

export const {useGetAllFakeProductsQuery} = FakeProductApiSlice;