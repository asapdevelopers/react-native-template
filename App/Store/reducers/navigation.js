import AppNavigation from "../../Navigation/AppNavigation";
import { NavigationActions } from "react-navigation";

let initNavState = AppNavigation.router.getStateForAction(
  NavigationActions.init()
);

export const reducer = (state = initNavState, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};
