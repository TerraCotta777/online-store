import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { CurrentUser, User } from "entities/user/types";
// import { User } from "entities/user/types";

export type UserInitialState = {
  token: string;
};
const initialState: UserInitialState = {
  token: "",
};
export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser(
      state: UserInitialState,
      action: PayloadAction<{ token: string }>
    ) {
      // console.log(action.payload)
      state.token = action.payload.token;
    },
    clearUser(state: UserInitialState) {
      state.token = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
