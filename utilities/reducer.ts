import { TAppAction, TAppState } from "../store";

export const combineReducers =
  (slices: any) =>
  (state: TAppState | undefined, action: TAppAction): any =>
    Object.keys(slices).reduce((currentState, props) => {
      const newState = slices[props](currentState, action);

      if (newState) {
        return { ...currentState, ...newState };
      }

      return currentState;
    }, state);
