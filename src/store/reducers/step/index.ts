import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NameSpace, Step } from "../../../const";
import { IStep, IStepState } from "./types";

const initialState: IStepState = {
  step: Step.Main,
};

const reducer = createSlice({
  name: NameSpace.Step,
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<IStep>) => {
      state.step = action.payload;
    },
  },
});

export default reducer;

export const { setStep } = reducer.actions;
