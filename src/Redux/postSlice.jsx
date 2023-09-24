"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/instance";

/**
 * @author : Goya Gim
 * @includes : Get server data from api and send it to the
 *             app/page.jsx
 *             Redux Toolkit & thunk
 */

export const __getPost = createAsyncThunk(
  "posts/getPost",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get(
        `/api/posts?page=${payload.page}&${payload.size}`
        // { withCredentials: true, }
      );
      // console.log(res.data.data.content);
      return res.data.data.content;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  postsPerPage: 4,
  moreData: true,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = [...state.posts, ...action.payload];
        state.currentPage += 1;
      })
      .addCase(__getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
