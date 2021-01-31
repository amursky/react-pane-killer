import { FC } from "react";
import { classes } from "./pane-split.styles";

export type SplitType = "vertical" | "horizontal";

export interface IPaneSplitProps {
  split: SplitType;
}

export const PaneSplit: FC<IPaneSplitProps> = ({ children }) => (
  <div className={classes.root}>{children}</div>
);
