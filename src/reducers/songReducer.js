export default (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_PLAY":
      return {
        ...state,
        currentlyPlaying: !state.currentlyPlaying
      };
    case "ADD_SONG_TO_LIKE":
      return {
        ...state,
        like: [...state.like, action.payload]
      };
    case "REMOVE_SONG_FROM_LIKE":
      return {
        ...state,
        like: state.like.filter(song => song !== action.payload)
      };
    default:
      return state;
  }
};
