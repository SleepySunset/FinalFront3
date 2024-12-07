export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS": 
      return { ...state, dentists: action.payload };
    case "TOGGLE_FAV": {
      let isFav = state.favs.some((fav) => fav.id === action.payload.id);
      return {
        ...state,
        favs: isFav
          ? state.favs.filter((fav) => fav.id !== action.payload.id)
          : [...state.favs, action.payload],
      };
    }
    case "TOGGLE_DARKTHEME":
      return { ...state, darkTheme: action.payload };
    default:
      return state;
  }
};
