import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import songReducer from "./reducers/songReducer";

// composing Redux Dev tool with Thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// defining initial state
const initialState = { song: { currentlyPlaying: null, like: [] } };

// use combined Reducer when importing more reducers
const combinedReducer = combineReducers({
  song: songReducer
  // new reducer goes here...
});

export default createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
