import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NameSpace, Screen } from "../../../const";
import { IScreen, IScreenState } from "./types";

const initialState: IScreenState = {
  screen: Screen.Main,
};

const reducer = createSlice({
  name: NameSpace.Screen,
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<IScreen>) => {
      state.screen = action.payload;
    },
  },
});

export default reducer;

export const { setScreen } = reducer.actions;
