import { NameSpace } from "../../../const";
import { State } from "../../../types/state";
import { IScreen } from "./types";

export const getScreen = (state: State): IScreen =>
  state[NameSpace.Screen].screen;
