import { defineStore } from 'pinia'

interface Icon {
  name: string
  componentName: string
  svgFileName: string
}

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Icon[],
  }),
  getters: {
    isAFavorite: (state) => (componentName: string) =>
      state.favorites.some((ic) => ic.componentName === componentName),
  },
  actions: {
    favoriteIcon(icon: Icon) {
      this.favorites.push(icon)
    },
    unFavoriteIcon(icon: Icon) {
      this.favorites = this.favorites.filter(
        (item) => item.componentName !== icon.componentName
      )
    },
  },
})
