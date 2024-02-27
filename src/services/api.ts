import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProduto: builder.query<Produto[], void>({
      query: () => ''
    })
  })
})

export const { useGetProdutoQuery } = api

export default api
