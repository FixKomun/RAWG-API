import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../redux/slices/gamesSlice";
import gameDetailReducer from "../redux/slices/gameDetailSlice";

export default configureStore({
  reducer: {
    games: gameReducer,
    gameDetail: gameDetailReducer,
  },
});
