import { NavProps } from "..";

export type SidebarProps = NavProps & {
  open: boolean;
  handleOpen: (open: boolean) => void;
};
