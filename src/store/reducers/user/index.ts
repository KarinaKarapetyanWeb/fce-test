import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NameSpace, Step } from "../../../const";
import { fetchIp } from "./action";
import { IUserState } from "./types";

const initialState: IUserState = {
  ip: null,
};

const reducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchIp.fulfilled, (state, action) => {
      state.ip = action.payload;
    });
  },
});

export default reducer;
