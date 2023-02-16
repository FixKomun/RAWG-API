import { createSlice } from "@reduxjs/toolkit";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../../api";
import axios from "axios";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    popularGames: [],
    upcomingGames: [],
    newGames: [],
    searched: [],
  },
  reducers: {
    getPopularGames: (state, action) => {
      state.popularGames = action.payload;
    },
    getUpcomingGames: (state, action) => {
      state.upcomingGames = action.payload;
    },
    getNewGames: (state, action) => {
      state.newGames = action.payload;
    },
    getSearchedGames: (state, action) => {
      state.searched = action.payload;
    },
    clearSearchedGames: (state) => {
      state.searched = [];
    },
  },
});

export const getPopularGamesAsync = () => async (dispatch) => {
  try {
    const res = await axios.get(popularGamesURL());
    dispatch(getPopularGames(res.data.results));
  } catch (err) {
    throw new Error(err);
  }
};

export const getUpcomingGamesAsync = () => async (dispatch) => {
  try {
    const res = await axios.get(upcomingGamesURL());
    dispatch(getUpcomingGames(res.data.results));
  } catch (err) {
    throw new Error(err);
  }
};

export const getNewGamesAsync = () => async (dispatch) => {
  try {
    const res = await axios.get(newGamesURL());
    dispatch(getNewGames(res.data.results));
  } catch (err) {
    throw new Error(err);
  }
};

export const getSearchedGamesAsync = (game_name) => async (dispatch) => {
  try {
    const res = await axios.get(searchGameURL(game_name));
    dispatch(getSearchedGames(res.data.results));
  } catch (err) {
    throw new Error(err);
  }
};

export const {
  getPopularGames,
  getUpcomingGames,
  getNewGames,
  getSearchedGames,
  clearSearchedGames,
} = gamesSlice.actions;

export default gamesSlice.reducer;
