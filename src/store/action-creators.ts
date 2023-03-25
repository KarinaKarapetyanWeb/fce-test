import Step from "./reducers/step";
import User from "./reducers/user";
import Locations from "./reducers/locations";
import * as UserActionCreators from "./reducers/user/action";
import * as LocationsActionCreators from "./reducers/locations/action";

const allActionCreators = {
  ...Step.actions,
  ...User.actions,
  ...UserActionCreators,
  ...Locations.actions,
  ...LocationsActionCreators,
};

export default allActionCreators;
