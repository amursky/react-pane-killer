import { FC } from "react";
import { classes } from "./pane.styles";

export interface IPaneProps {
  minWidth?: number;
  maxWidth?: number;
}

export const Pane: FC<IPaneProps> = ({ children }) => (
  <article className={classes.root}>
    <div className={classes.content}>{children}</div>
  </article>
);
