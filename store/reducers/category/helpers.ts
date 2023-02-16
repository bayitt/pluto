import { TCategoryAction } from ".";
import { TAppState } from "../..";

export const getCategories = (state: TAppState, payload: TCategoryAction["payload"]): TAppState => {
    return {
        ...state,
        categories: payload
    }
}