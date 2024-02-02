import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarFunc: (state, action) => {
      state.sidebar = !state.sidebar;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = sidebarSlice.actions;

export default sidebarSlice.reducer;
