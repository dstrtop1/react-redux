import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../interfaces/App";

interface IApp {
  isLoading: boolean;
  posts: IPost[];
}

const initialState: IApp = {
  isLoading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state: IApp, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
      return state;
    },
    setLoading(state: IApp, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
      return state;
    },
  },
});

export const fetchPosts = () => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      dispatch(setPosts(json));
      dispatch(setLoading(false));
    });
};

export const { setLoading, setPosts } = postsSlice.actions;
export default postsSlice.reducer;
