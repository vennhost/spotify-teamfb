export default (state = {}, action) => {
  switch (action.type) {
    case "PLAY_SONG":
      return {
        ...state,
        currentlyPlaying: true,
        //if the song is not currently playing then set the song detail to null
        songDetail: action.payload
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
