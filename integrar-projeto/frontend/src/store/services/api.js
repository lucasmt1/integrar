import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGrupos: builder.query({
      query: () => 'grupos',
    }),
    getMensagens: builder.query({
      query: (grupoId) => `grupos/${grupoId}/mensagens`,
    }),
    enviarMensagem: builder.mutation({
      query: ({ grupoId, mensagem }) => ({
        url: `grupos/${grupoId}/mensagens`,
        method: 'POST',
        body: { mensagem },
      }),
    }),
  }),
});

export const {
  useGetGruposQuery,
  useGetMensagensQuery,
  useEnviarMensagemMutation,
} = api;