import { NameSpace } from "../../../const";
import { State } from "../../../types/state";

export const getIp = (state: State): string | null => state[NameSpace.User].ip;
