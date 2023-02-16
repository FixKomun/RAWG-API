import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { gameDetailsURL } from "../../api";
import { gameScreenshotURL } from "./../../api";

export const gameDetailSlice = createSlice({
  name: "gameDetail",
  initialState: {
    game: [],
    screenshots: [],
    isLoading: true,
  },
  reducers: {
    getGameDetail: (state, action) => {
      state.game = action.payload;
    },
    getGameScreenshot: (state, action) => {
      state.screenshots = action.payload;
      state.isLoading = false;
    },
    loadingDetail: (state) => {
      state.isLoading = true;
    },
  },
});

export const getGameDetailAsync = (id) => async (dispatch) => {
  const res = await axios.get(gameDetailsURL(id));
  dispatch(getGameDetail(res.data));
};

export const getGameScreenshotAsync = (id) => async (dispatch) => {
  dispatch(loadingDetail());
  const res = await axios.get(gameScreenshotURL(id));
  dispatch(getGameScreenshot(res.data.results));
};

export const { getGameDetail, getGameScreenshot, loadingDetail } =
  gameDetailSlice.actions;
export default gameDetailSlice.reducer;
