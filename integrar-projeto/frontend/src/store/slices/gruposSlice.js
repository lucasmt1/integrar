import { createSlice } from '@reduxjs/toolkit';

const gruposSlice = createSlice({
  name: 'grupos',
  initialState: {
    grupos: [],
    grupoAtual: null,
    loading: false,
    error: null
  },
  reducers: {
    setGrupos: (state, action) => {
      state.grupos = action.payload;
    },
    setGrupoAtual: (state, action) => {
      state.grupoAtual = action.payload;
    },
    addMensagem: (state, action) => {
      if (state.grupoAtual) {
        state.grupoAtual.mensagens.push(action.payload);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setGrupos, setGrupoAtual, addMensagem, setLoading, setError } = gruposSlice.actions;
export default gruposSlice.reducer;