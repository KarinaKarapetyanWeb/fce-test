import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import Step from "./reducers/step";
import User from "./reducers/user";
import Locations from "./reducers/locations";

export const rootReducer = combineReducers({
  [NameSpace.Step]: Step.reducer,
  [NameSpace.User]: User.reducer,
  [NameSpace.Locations]: Locations.reducer,
});
