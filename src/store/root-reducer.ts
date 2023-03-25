import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import Screen from "./reducers/screen";
import User from "./reducers/user";
import Locations from "./reducers/locations";

export const rootReducer = combineReducers({
  [NameSpace.Screen]: Screen.reducer,
  [NameSpace.User]: User.reducer,
  [NameSpace.Locations]: Locations.reducer,
});
