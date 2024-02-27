import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.favoritos.find((p) => p.id === produto.id)) {
        const favoritosSem = state.favoritos.filter((p) => p.id !== produto.id)
        state.favoritos = favoritosSem
      } else {
        state.favoritos = [...state.favoritos, produto]
      }
    }
  }
})

export const { adicionarFav } = favoritosSlice.actions
export default favoritosSlice.reducer

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
