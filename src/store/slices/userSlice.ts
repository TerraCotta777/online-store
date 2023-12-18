import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserInitialState = {
  token: string;
  isAutorised: boolean;
};
const initialState: UserInitialState = {
  token: "",
  isAutorised: false
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
      state.isAutorised = true;
    },
    clearUser(state: UserInitialState) {
      state.token = "";
      state.isAutorised = false
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
