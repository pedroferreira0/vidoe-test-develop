export type Prop = string | number | string[] | number[] | any[];

export type DisplayProp = "flex" | "block" | "unset" | "none";

export interface PositionProps {
  display?: DisplayProp | any[];
  children: JSX.Element | null;
  top?: Prop;
  zIndex?: number | number[];
  bg?: string;
  height?: Prop;
  left?: Prop;
  right?: Prop;
  bottom?: Prop;
  width?: Prop;
  maxWidth?: Prop;
  maxHeight?: Prop;
  hiddeOnJustlive?: boolean
}
