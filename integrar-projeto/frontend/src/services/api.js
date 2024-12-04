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
    // Auth endpoints existentes
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    cadastro: builder.mutation({
      query: (userData) => ({
        url: 'auth/cadastro',
        method: 'POST',
        body: userData,
      }),
    }),
    
    // Endpoints de grupo
    getGrupo: builder.query({
      query: (id) => `grupos/${id}`,
    }),
    getGrupos: builder.query({
      query: () => 'grupos',
    }),
    getMensagens: builder.query({
      query: (grupoId) => `grupos/${grupoId}/mensagens`,
    }),
    enviarMensagem: builder.mutation({
      query: ({grupoId, mensagem}) => ({
        url: `grupos/${grupoId}/mensagens`,
        method: 'POST',
        body: { mensagem },
      }),
    }),
    criarGrupo: builder.mutation({
      query: (data) => ({
        url: 'grupos',
        method: 'POST',
        body: data,
      }),
    }),
    entrarGrupo: builder.mutation({
      query: (grupoId) => ({
        url: `grupos/${grupoId}/entrar`,
        method: 'POST',
      }),
    }),

    // Endpoint de conteúdos
    getConteudos: builder.query({
      query: () => 'conteudos',
    }),
  }),
});

export const {
  useLoginMutation,
  useCadastroMutation,
  useGetGrupoQuery,
  useGetGruposQuery,
  useGetMensagensQuery,
  useEnviarMensagemMutation,
  useCriarGrupoMutation,
  useEntrarGrupoMutation,
  useGetConteudosQuery, // Nova exportação
} = api;