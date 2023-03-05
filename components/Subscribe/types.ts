import { Dispatch } from "react";
import { TAppAction } from "../../store";

export type TSubscribe = {
  isOpen: boolean;
  onClose: () => void;
  dispatch: Dispatch<TAppAction>;
};
