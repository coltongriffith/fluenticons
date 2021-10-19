export const state = () => ({
  favorites: []
});

export const mutations = {
  favoriteIcon(state, payload) {
    state.favorites.push(payload);
  },
  unFavoriteIcon(state, payload) {
    let newFavorites = state.favorites.filter(
      item => item.componentName !== payload.componentName
    );
    state.favorites = newFavorites;
    newFavorites = [];
  }
};

export const getters = {
  favorites(state) {
    return state.favorites;
  },
  isAFavorite: state => payload => {
    if (state.favorites.find(ic => ic.componentName === payload)) return true;
    else return false;
  }
};
